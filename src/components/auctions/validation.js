import { body } from 'express-validator';

import respondOnValidationError from '@app/middlewares/respondOnValidationError';

const validateStep = () =>
  body('minimumStep')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Step is required field');

const validatePrice = () =>
  body('minimumAcceptablePrice')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Price is required field');

const validateTime = () =>
  body('endTime')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('End time is required field');

export const validateAuction = () => [
  validateStep(),
  validatePrice(),
  validateTime(),
  respondOnValidationError,
];
