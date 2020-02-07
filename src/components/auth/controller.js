import { EXPIRE_TIME } from './constants';
import { service as UserService } from '../users';
import { createToken } from './service';

export const create = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (await UserService.isEmailTaken(email)) {
    return res.status(409).json({
      errors: [
        {
          msg: 'Email already exists',
        },
      ],
    });
  }

  try {
    const user = await UserService.createUser({ email, password, name });
    const token = createToken(
      { user: { email, name, id: user._id } },
      EXPIRE_TIME,
    );

    return res.json(token);
  } catch (e) {
    return next(e);
  }
};
