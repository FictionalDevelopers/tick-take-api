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

const validateEmail = () =>
  body('email')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Email is required field')
    .isEmail()
    .withMessage('Invalid email');

export const validateRegistration = () => [validatePassword(), validateEmail()];
