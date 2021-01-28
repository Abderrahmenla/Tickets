import { Request, Response,NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { isExpressionStatement } from 'typescript';

interface UserPayLoad{
  id: string;
  email: string;
}

declare global{
  namespace Express{
    interface Request {
      currentUser?: UserPayLoad;
    }
  }
}

export const currentUser = (req:Request,res:Response,next:NextFunction) => {
  if (!req.session || !req.session.jwt) return next();
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayLoad;
    req.currentUser = payload;
  } catch (err) {
  }
  next();
}