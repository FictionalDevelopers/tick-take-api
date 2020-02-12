import { body } from 'express-validator';
import respondOnValidationError from '../../middlewares/respondOnValidationError';

const validateLotName = () =>
  body('name')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Name is required field');

const validateLotDescription = () =>
  body('description')
    .exists({
      checkNull: true,
      checkFalsy: true,
    })
    .withMessage('Description is required field');

export const validateLot = () => [
  validateLotName(),
  validateLotDescription(),
  respondOnValidationError,
];
