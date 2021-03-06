import * as passport from 'passport';
import * as BearerStrategy from 'passport-http-bearer'

import { ValidateToken } from '../utils/security/tokens' 
import DB from '../db';

passport.use(new BearerStrategy.Strategy(async (token, done) => {
    try {
        let payload = await ValidateToken(token);
        let [user] = await DB.authorsDB.findOneByID(payload.userid);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (error) {
        done(error);
    }
}))