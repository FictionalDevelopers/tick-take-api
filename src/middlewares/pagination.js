import { query } from 'express-validator';
import respondOnValidationError from './respondOnValidationError';
import PAGINATION from '../constants/pagination';

const validatePage = () =>
  query('page').customSanitizer(v => +v || PAGINATION.PAGE);

const validateLimit = () =>
  query('limit').customSanitizer(v => +v || PAGINATION.LIMIT);

export default () => [
  validatePage(),
  validateLimit(),
  respondOnValidationError,
];
