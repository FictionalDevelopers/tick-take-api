import { service as UserService } from '@app/components/users';

import { createAccessToken } from './service';

export const create = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (await UserService.isEmailTaken(email)) {
    return res.status(401).json({
      email: 'Email already exists',
    });
  }

  try {
    const user = await UserService.createUser({ email, password, name });
    const userPayload = { email, name, id: user._id };
    const token = createAccessToken({ user: userPayload });

    return res.json({
      user: userPayload,
      token,
    });
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
        email: 'Invalid email',
      });
    }

    const isPasswordValid = UserService.isPasswordSame(
      password,
      user.passwordHash,
      user.passwordSalt,
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        password: 'Invalid password',
      });
    }

    const userPayload = { email, name: user.name, id: user._id };
    const token = createAccessToken({ user: userPayload });

    return res.json({
      token,
      user: userPayload,
    });
  } catch (e) {
    return next(e);
  }
};
