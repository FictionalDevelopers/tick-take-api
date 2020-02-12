import { validationResult } from 'express-validator';
import errorFormatter from '../utils/errorFormatter';

function respondOnValidationError(req, res, next) {
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped());
  }

  return next();
}

export default respondOnValidationError;
