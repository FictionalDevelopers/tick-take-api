import { body } from 'express-validator';

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
  validatePassword(),
  validatePasswordConfirm(),
  validateEmail(),
];

export const validateLogin = () => [
  body('password')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Password is required field'),
  validateEmail(),
];
