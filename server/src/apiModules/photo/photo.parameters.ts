import {Request} from 'express';
import {Query, ParamsDictionary} from 'express-serve-static-core';

interface TypedRequest<
  T,
  U extends Query,
  P extends ParamsDictionary
> extends Request {
  body: T,
  query: U,
  params: P,
}


type ReadOnePhotoReqBody = {
  }

type ReadOnePhotoReqQuery = {
}

type ReadOnePhotoReqParams = {
      id: string
,
}

export interface ReadOnePhotoRequest extends TypedRequest<
  ReadOnePhotoReqBody,
  ReadOnePhotoReqQuery,
  ReadOnePhotoReqParams
>{
}

export type ReadOnePhotoParams = {
      pathId: number
}

export const ReadOnePhotoRequestConvert = (
    body: ReadOnePhotoReqBody,
    query: ReadOnePhotoReqQuery,
    path: ReadOnePhotoReqParams,
): ReadOnePhotoParams => {
  return {
    pathId: parseInt(path.id),
  };
};
type UpdateOnePhotoReqBody = {
  afterLevel: string|undefined,
beforeLevel: string|undefined,
filePath2: string|null,
process: string|undefined,
status: string|undefined,
}

type UpdateOnePhotoReqQuery = {
}

type UpdateOnePhotoReqParams = {
      id: string
,
}

export interface UpdateOnePhotoRequest extends TypedRequest<
  UpdateOnePhotoReqBody,
  UpdateOnePhotoReqQuery,
  UpdateOnePhotoReqParams
>{
}

export type UpdateOnePhotoParams = {
      pathId: number
bodyAfterLevel: number|undefined,
bodyBeforeLevel: number|undefined,
bodyFilePath2: string|null,
bodyProcess: number|undefined,
bodyStatus: number|undefined,
}

export const UpdateOnePhotoRequestConvert = (
    body: UpdateOnePhotoReqBody,
    query: UpdateOnePhotoReqQuery,
    path: UpdateOnePhotoReqParams,
): UpdateOnePhotoParams => {
  return {
    pathId: parseInt(path.id),
    bodyAfterLevel: body.afterLevel? parseInt(body.afterLevel):undefined,
    bodyBeforeLevel: body.beforeLevel? parseInt(body.beforeLevel):undefined,
    bodyFilePath2: body.filePath2,
    bodyProcess: body.process? parseInt(body.process):undefined,
    bodyStatus: body.status? parseInt(body.status):undefined,
  };
};
type DeleteManyPhotoReqBody = {
  }

type DeleteManyPhotoReqQuery = {
      id: string[]
}

type DeleteManyPhotoReqParams = {
}

export interface DeleteManyPhotoRequest extends TypedRequest<
  DeleteManyPhotoReqBody,
  DeleteManyPhotoReqQuery,
  DeleteManyPhotoReqParams
>{
}

export type DeleteManyPhotoParams = {
      queryId: number[]
}

export const DeleteManyPhotoRequestConvert = (
    body: DeleteManyPhotoReqBody,
    query: DeleteManyPhotoReqQuery,
    path: DeleteManyPhotoReqParams,
): DeleteManyPhotoParams => {
  return {
    queryId: typeof query.id === 'string'?
    [parseInt(query.id)] :
  query.id.map((e) => parseInt(e)),
  };
};
type ReadManyPhotoReqBody = {
  }

type ReadManyPhotoReqQuery = {
      orderBy: string
      orderByField: string
}

type ReadManyPhotoReqParams = {
}

export interface ReadManyPhotoRequest extends TypedRequest<
  ReadManyPhotoReqBody,
  ReadManyPhotoReqQuery,
  ReadManyPhotoReqParams
>{
}

export type ReadManyPhotoParams = {
      queryOrderBy: string
      queryOrderByField: string
}

export const ReadManyPhotoRequestConvert = (
    body: ReadManyPhotoReqBody,
    query: ReadManyPhotoReqQuery,
    path: ReadManyPhotoReqParams,
): ReadManyPhotoParams => {
  return {
    queryOrderBy: query.orderBy,
    queryOrderByField: query.orderByField,
  };
};
type UploadManyPhotoReqBody = {
  }

type UploadManyPhotoReqQuery = {
}

type UploadManyPhotoReqParams = {
}

export interface UploadManyPhotoRequest extends TypedRequest<
  UploadManyPhotoReqBody,
  UploadManyPhotoReqQuery,
  UploadManyPhotoReqParams
>{
}

export type UploadManyPhotoParams = {
}

export const UploadManyPhotoRequestConvert = (
    body: UploadManyPhotoReqBody,
    query: UploadManyPhotoReqQuery,
    path: UploadManyPhotoReqParams,
): UploadManyPhotoParams => {
  return {
  };
};
type UpdateManyPhotoReqBody = {
          dataList: {
                afterLevel: string,
                beforeLevel: string,
                filePath2: string,
                id: string,
                process: string,
                status: string,
        }[],
whereField: string,
}

type UpdateManyPhotoReqQuery = {
}

type UpdateManyPhotoReqParams = {
}

export interface UpdateManyPhotoRequest extends TypedRequest<
  UpdateManyPhotoReqBody,
  UpdateManyPhotoReqQuery,
  UpdateManyPhotoReqParams
>{
}

export type UpdateManyPhotoParams = {
        bodyDataList: {
            bodyAfterLevel: number|undefined,
            bodyBeforeLevel: number|undefined,
            bodyFilePath2: string|null,
            bodyId: number,
            bodyProcess: number|undefined,
            bodyStatus: number|undefined,
        }[],
bodyWhereField: string,
}

export const UpdateManyPhotoRequestConvert = (
    body: UpdateManyPhotoReqBody,
    query: UpdateManyPhotoReqQuery,
    path: UpdateManyPhotoReqParams,
): UpdateManyPhotoParams => {
  return {
    bodyDataList: body.dataList.map((body :any) => {
      return {
        bodyAfterLevel: body.afterLevel? parseInt(body.afterLevel):undefined,
        bodyBeforeLevel: body.beforeLevel? parseInt(body.beforeLevel):undefined,
        bodyFilePath2: body.filePath2,
        bodyId: parseInt(body.id),
        bodyProcess: body.process? parseInt(body.process):undefined,
        bodyStatus: body.status? parseInt(body.status):undefined,
      };
    }),
    bodyWhereField: body.whereField,
  };
};


