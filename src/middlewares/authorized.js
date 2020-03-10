import { JsonWebTokenError } from 'jsonwebtoken';

import { service as AuthService } from '../components/auth';

function authorized(req, res, next) {
  const token = req.get('Authorization');

  if (!token) {
    return res.status(401).json({
      error: 'Token is not provided',
    });
  }

  try {
    const { user } = AuthService.verifyAccessToken(token);
    req.user = user;

    return next();
  } catch (e) {
    if (e instanceof JsonWebTokenError) {
      return res.status(401).json({
        error: 'Invalid token',
      });
    }

    return next(e);
  }
}

export default authorized;
