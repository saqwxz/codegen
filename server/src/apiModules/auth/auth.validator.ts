// eslint-disable-next-line no-unused-vars
import {Schema, CustomValidator} from 'express-validator';
import * as sessions from '../../sessions';
// custom begin import

// custom end import
export const createOneAuthValidator: Schema = {
  level: {
    in: 'body',
    isInt: true,
    optional: {
      options: {
        nullable: true,
      },
    },
  },
  role: {
    in: 'body',
    isInt: true,
  },
  JSESSIONID: {
    in: 'cookies',
    custom: {
      options: (value, {req, location, path}) => {
        sessions.cookieAuthSessionVerify(req['session'].userInfo);
        return true;
      },
    },
  },
};
export const deleteOneAuthValidator: Schema = {
  id: {
    in: 'params',
    isInt: true,
    notEmpty: true,
  },
};
export const updateOneAuthValidator: Schema = {
  id: {
    in: 'params',
    isInt: true,
    notEmpty: true,
  },
  level: {
    in: 'body',
    isInt: true,
    optional: {
      options: {
        nullable: true,
      },
    },
  },
  role: {
    in: 'body',
    isInt: true,
  },
  JSESSIONID: {
    in: 'cookies',
    custom: {
      options: (value, {req, location, path}) => {
        sessions.cookieAuthSessionVerify(req['session'].userInfo);
        return true;
      },
    },
  },
};
export const readManyAuthValidator: Schema = {
  JSESSIONID: {
    in: 'cookies',
    custom: {
      options: (value, {req, location, path}) => {
        sessions.cookieAuthSessionVerify(req['session'].userInfo);
        return true;
      },
    },
  },
};
