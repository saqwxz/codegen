import {Application, Request, Response, NextFunction} from 'express';
import {errorHender} from './authErrors';
import {Controller, Get, Post, Put, Delete, Validator} from '../baseController';
import * as validSchemas from './authSchemas';
import {AuthService, Container} from './authService';

const authServiceInstance = Container.get(AuthService);

@Controller('/auth')
export class AuthController {
  constructor(private app: Application) {}

  @Get('/user')
  @Validator(validSchemas.getUsers)
  async findUsers(req: Request, res: Response, next: NextFunction) {
    const {skip, take, sort, sequ} = req.query;
    const param : validSchemas.FindManyOption={
      skip: parseInt(<string>skip),
      take: parseInt(<string>take),
      sort: <string>sort,
      sequ: <validSchemas.Sequ>sequ,
    };

    authServiceInstance.findUsers(param)
        .then((result) =>{
          res.json(result);
        })
        .catch((e) => {
          next(errorHender(e));
        });
  }

  @Get('/user/:id')
  @Validator(validSchemas.getUser)
  async findUser(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);


    authServiceInstance.findUser(id)
        .then((result) =>{
          res.json(result);
        })
        .catch((e) => {
          next(errorHender(e));
        });
  }

  @Post('/user')
  @Validator(validSchemas.createUser)
  async createUser(req: Request, res: Response, next: NextFunction) {
    const {email, password, name} = req.body;
    authServiceInstance.createUser([email, password, name])
        .then((result) =>{
          res.status(201);
          res.json(result);
        })
        .catch((e) => {
          next(errorHender(e));
        });
  }

  @Put('/user/:id')
  @Validator(validSchemas.updateUser)
  async updateUser(req: Request, res: Response, next: NextFunction) {
    const {password, name, authLevel} = req.body;
    const id = parseInt(req.params.id);

    authServiceInstance.updateUser(id, [password, name, authLevel])
        .then((result) =>{
          res.json(result);
        })
        .catch((e) => {
          next(errorHender(e));
        });
  }

  @Delete('/user/:id')
  @Validator(validSchemas.deleteUser)
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);
    authServiceInstance.deleteUser(id)
        .then((result) =>{
          res.status(204);
          res.send(204);
        })
        .catch((e) => {
          next(errorHender(e));
        });
  }

  @Post('/login')
  @Validator(validSchemas.login)
  login(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body;

    authServiceInstance.login(email, password)
        .then((result) =>{
          res.json(result);
        })
        .catch((e) => {
          next(errorHender(e));
        });
  }
}
