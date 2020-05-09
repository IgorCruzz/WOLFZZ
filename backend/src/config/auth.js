import 'dotenv/config';

export default {
  secret: process.env.AUTH_SECRET,
  expiresIn: '7d',
};
