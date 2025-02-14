import { Router } from 'express';
import AuthRouter from './auth';
import ClientRouter from './client';

const v1BaseRouter = Router();

v1BaseRouter.use('/auth', AuthRouter);
v1BaseRouter.use('/client', ClientRouter);

export default v1BaseRouter;
