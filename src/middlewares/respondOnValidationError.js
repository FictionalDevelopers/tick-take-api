import { validationResult } from 'express-validator';
import { ApiError } from '@common/Errors';

function respondOnValidationError(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ApiError(errors.mapped()));
  }

  return next();
}

export default respondOnValidationError;
