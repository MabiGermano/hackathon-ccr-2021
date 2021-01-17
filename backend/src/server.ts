import express from 'express';
import cors from 'cors';
// import session from 'express-session';
// import  passport from 'passport';
// import { Strategy } from 'passport-linkedin-oauth2';
import * as dotenv from 'dotenv';

import routes from './routes';
import './database/connection';

// class LinkedInStrategy implements Strategy {

// }

dotenv.config();

const app = express();
// app.set('view engine', 'ejs');

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: 'SECRET'
//   }));
  
//   app.use(passport.initialize());
//   app.use(passport.session());
  
//   passport.serializeUser(function (user, cb) {
//     cb(null, user);
//   });
  
//   passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
//   });
  
//   passport.use(new Strategy({
//     clientID: process.env.LINKEDIN_CLIENT_ID,
//     clientSecret: process.env.LINKEDIN_SECRET_ID,
//     callbackURL: `${process.env.APP_BASE_URL}/home`,
//     scope: ['r_emailaddress', 'r_liteprofile'],
//   }, function (token, tokenSecret, profile, done) {
//     return done(null, profile);
//   }
//   ));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);