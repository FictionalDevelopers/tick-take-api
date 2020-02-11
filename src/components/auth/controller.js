import { validationResult } from 'express-validator';
import { service as UserService } from '../users';
import { createAccessToken } from './service';
import errorFormatter from '../../utils/errorFormatter';

export const create = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const data = errorFormatter(result.errors);
    return res.status(422).json(data);
  }

  const { email, password, name } = req.body;

  if (await UserService.isEmailTaken(email)) {
    return res.status(401).json({
      error: 'Email already exists',
    });
  }

  try {
    const user = await UserService.createUser({ email, password, name });
    const data = { user: { email, name, id: user._id } };
    const accessToken = createAccessToken(data);

    return res.json(accessToken);
  } catch (e) {
    return next(e);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserService.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        error: 'Invalid email',
      });
    }

    const isPasswordValid = UserService.isPasswordSame(
      password,
      user.passwordHash,
      user.passwordSalt,
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'Invalid password',
      });
    }

    const data = { user: { email, name: user.name, id: user._id } };
    const accessToken = createAccessToken(data);

    return res.json(accessToken);
  } catch (e) {
    return next(e);
  }
};
