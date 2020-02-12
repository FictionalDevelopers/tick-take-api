import { service as UserService } from '../users';
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

    const data = { user: { email, name: user.name, id: user._id } };
    const accessToken = createAccessToken(data);

    return res.json(accessToken);
  } catch (e) {
    return next(e);
  }
};
