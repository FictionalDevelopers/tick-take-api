import { query } from 'express-validator';
import PAGINATION from '../constants/pagination';

const getPage = () => query('page').customSanitizer(v => +v || PAGINATION.PAGE);

const getLimit = () =>
  query('limit').customSanitizer(v => +v || PAGINATION.LIMIT);

export default () => [getPage(), getLimit()];
