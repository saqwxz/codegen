import {Request} from 'express';
import {Query, ParamsDictionary} from 'express-serve-static-core';

interface TypedRequest<
  T,
  U extends Query,
  P extends ParamsDictionary,
  C
> extends Request {
  body: T,
  query: U,
  params: P,
  cookies: C
}


type GoogleLoginReqBody = {
  email: string,
id: string,
name: string,
}

type GoogleLoginReqQuery = {
}

type GoogleLoginReqParams = {
}

type GoogleLoginReqCookie = {
}

export interface GoogleLoginRequest extends TypedRequest<
  GoogleLoginReqBody,
  GoogleLoginReqQuery,
  GoogleLoginReqParams,
  GoogleLoginReqCookie
>{
}

export type GoogleLoginParams = {
bodyEmail: string,
bodyId: string,
bodyName: string,
}


export const GoogleLoginRequestConvert = (
    body: GoogleLoginReqBody,
    query: GoogleLoginReqQuery,
    path: GoogleLoginReqParams,
    cookie: GoogleLoginReqCookie,
): GoogleLoginParams => {
  return {
    bodyEmail: body.email,
    bodyId: body.id,
    bodyName: body.name,
  };
};
type LoginUserReqBody = {
  email: string,
password: string,
}

type LoginUserReqQuery = {
}

type LoginUserReqParams = {
}

type LoginUserReqCookie = {
}

export interface LoginUserRequest extends TypedRequest<
  LoginUserReqBody,
  LoginUserReqQuery,
  LoginUserReqParams,
  LoginUserReqCookie
>{
}

export type LoginUserParams = {
bodyEmail: string,
bodyPassword: string,
}


export const LoginUserRequestConvert = (
    body: LoginUserReqBody,
    query: LoginUserReqQuery,
    path: LoginUserReqParams,
    cookie: LoginUserReqCookie,
): LoginUserParams => {
  return {
    bodyEmail: body.email,
    bodyPassword: body.password,
  };
};
type LogoutUserReqBody = {
  }

type LogoutUserReqQuery = {
}

type LogoutUserReqParams = {
}

type LogoutUserReqCookie = {
}

export interface LogoutUserRequest extends TypedRequest<
  LogoutUserReqBody,
  LogoutUserReqQuery,
  LogoutUserReqParams,
  LogoutUserReqCookie
>{
}

export type LogoutUserParams = {
}


export const LogoutUserRequestConvert = (
    body: LogoutUserReqBody,
    query: LogoutUserReqQuery,
    path: LogoutUserReqParams,
    cookie: LogoutUserReqCookie,
): LogoutUserParams => {
  return {
  };
};
type RegisterUserReqBody = {
  authLevel: string|undefined,
email: string,
googleId: string|null,
password: string,
phone: string|null,
userStatus: string|undefined,
username: string,
}

type RegisterUserReqQuery = {
}

type RegisterUserReqParams = {
}

type RegisterUserReqCookie = {
}

export interface RegisterUserRequest extends TypedRequest<
  RegisterUserReqBody,
  RegisterUserReqQuery,
  RegisterUserReqParams,
  RegisterUserReqCookie
>{
}

export type RegisterUserParams = {
bodyAuthLevel: number|undefined,
bodyEmail: string,
bodyGoogleId: string|null,
bodyPassword: string,
bodyPhone: string|null,
bodyUserStatus: number|undefined,
bodyUsername: string,
}


export const RegisterUserRequestConvert = (
    body: RegisterUserReqBody,
    query: RegisterUserReqQuery,
    path: RegisterUserReqParams,
    cookie: RegisterUserReqCookie,
): RegisterUserParams => {
  return {
    bodyAuthLevel: body.authLevel? parseInt(body.authLevel):undefined,
    bodyEmail: body.email,
    bodyGoogleId: body.googleId,
    bodyPassword: body.password,
    bodyPhone: body.phone,
    bodyUserStatus: body.userStatus? parseInt(body.userStatus):undefined,
    bodyUsername: body.username,
  };
};
type DeleteOneUserReqBody = {
  }

type DeleteOneUserReqQuery = {
}

type DeleteOneUserReqParams = {
      id: string
,
}

type DeleteOneUserReqCookie = {
}

export interface DeleteOneUserRequest extends TypedRequest<
  DeleteOneUserReqBody,
  DeleteOneUserReqQuery,
  DeleteOneUserReqParams,
  DeleteOneUserReqCookie
>{
}

export type DeleteOneUserParams = {
      pathId: string
}


export const DeleteOneUserRequestConvert = (
    body: DeleteOneUserReqBody,
    query: DeleteOneUserReqQuery,
    path: DeleteOneUserReqParams,
    cookie: DeleteOneUserReqCookie,
): DeleteOneUserParams => {
  return {
            pathId: path.id,
  };
};
type ReadOneUserReqBody = {
  }

type ReadOneUserReqQuery = {
}

type ReadOneUserReqParams = {
      id: string
,
}

type ReadOneUserReqCookie = {
}

export interface ReadOneUserRequest extends TypedRequest<
  ReadOneUserReqBody,
  ReadOneUserReqQuery,
  ReadOneUserReqParams,
  ReadOneUserReqCookie
>{
}

export type ReadOneUserParams = {
      pathId: string
}


export const ReadOneUserRequestConvert = (
    body: ReadOneUserReqBody,
    query: ReadOneUserReqQuery,
    path: ReadOneUserReqParams,
    cookie: ReadOneUserReqCookie,
): ReadOneUserParams => {
  return {
            pathId: path.id,
  };
};
type UpdateOneUserReqBody = {
  authLevel: string|undefined,
email: string,
googleId: string|null,
password: string,
phone: string|null,
userStatus: string|undefined,
username: string,
}

type UpdateOneUserReqQuery = {
}

type UpdateOneUserReqParams = {
      id: string
,
}

type UpdateOneUserReqCookie = {
}

export interface UpdateOneUserRequest extends TypedRequest<
  UpdateOneUserReqBody,
  UpdateOneUserReqQuery,
  UpdateOneUserReqParams,
  UpdateOneUserReqCookie
>{
}

export type UpdateOneUserParams = {
      pathId: string
bodyAuthLevel: number|undefined,
bodyEmail: string,
bodyGoogleId: string|null,
bodyPassword: string,
bodyPhone: string|null,
bodyUserStatus: number|undefined,
bodyUsername: string,
}


export const UpdateOneUserRequestConvert = (
    body: UpdateOneUserReqBody,
    query: UpdateOneUserReqQuery,
    path: UpdateOneUserReqParams,
    cookie: UpdateOneUserReqCookie,
): UpdateOneUserParams => {
  return {
      pathId: path.id,
    bodyAuthLevel: body.authLevel? parseInt(body.authLevel):undefined,
    bodyEmail: body.email,
    bodyGoogleId: body.googleId,
    bodyPassword: body.password,
    bodyPhone: body.phone,
    bodyUserStatus: body.userStatus? parseInt(body.userStatus):undefined,
    bodyUsername: body.username,
  };
};
type ReadManyUserReqBody = {
  }

type ReadManyUserReqQuery = {
}

type ReadManyUserReqParams = {
}

type ReadManyUserReqCookie = {
}

export interface ReadManyUserRequest extends TypedRequest<
  ReadManyUserReqBody,
  ReadManyUserReqQuery,
  ReadManyUserReqParams,
  ReadManyUserReqCookie
>{
}

export type ReadManyUserParams = {
}


export const ReadManyUserRequestConvert = (
    body: ReadManyUserReqBody,
    query: ReadManyUserReqQuery,
    path: ReadManyUserReqParams,
    cookie: ReadManyUserReqCookie,
): ReadManyUserParams => {
  return {
  };
};


