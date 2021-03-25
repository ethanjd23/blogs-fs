import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import {ComparePassword} from '../utils/security/passwords';
import DB from '../db';

passport.serializeUser((user, done) => done(null, user));