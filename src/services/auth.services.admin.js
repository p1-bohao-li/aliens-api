import passport from 'passport';
import LocalStrategy from 'passport-local';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';

import Admin from '../modules/admins/admin.model';
import constants from '../config/constants';

// Local strategy
const localOpts = {
  usernameField: 'login',
};

const localStrategy = new LocalStrategy(
  localOpts,
  async (login, password, done) => {
    try {
      const admin = await Admin.findOne({login});
      if (!admin) {
        return done(null, false);
      } else if (!admin.authenticateAdmin(password)) {
        return done(null, false);
      }

      return done(null, admin);
    } catch (e) {
      return done(e, false);
    }
  },
);

// Jwt strategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: constants.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
  try {

    const admin = await Admin.findById(payload._id);

    if (!admin) {
      return done(null, false);
    }

    return done(null, admin);
  } catch (e) {
    return done(e, false);
  }
});

passport.use('admin-local', localStrategy);
passport.use('admin-jwt', jwtStrategy);

export const authLocalAdmins = passport.authenticate('admin-local', {session: false});
export const authJwtAdmins = passport.authenticate('admin-jwt', {session: false});
