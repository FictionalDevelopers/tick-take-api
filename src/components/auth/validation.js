import { body } from 'express-validator';

import respondOnValidationError from '@app/middlewares/respondOnValidationError';

const validateName = () =>
  body('name')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .custom(v => v.trim())
    .withMessage('Name is required field');

const validatePassword = () =>
  body('password')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password is required field')
    .isLength({ min: 3 })
    .withMessage('Your password must be at least 3 characters');

const validatePasswordConfirm = () =>
  body('passwordConfirm')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password confirm is required field')
    .custom((passwordConfirm, { req }) => {
      const {
        body: { password },
      } = req;

      if (password !== passwordConfirm) {
        throw new Error('Passwords do not match');
      }

      return true;
    });

const validateEmail = () =>
  body('email')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Email is required field')
    .isEmail()
    .withMessage('Invalid email');

export const validateRegistration = () => [
  validateName(),
  validatePassword(),
  validatePasswordConfirm(),
  validateEmail(),
  respondOnValidationError,
];

export const validateLogin = () => [
  body('password')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password is required field'),
  validateEmail(),
  respondOnValidationError,
];
