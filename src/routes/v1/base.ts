import { Router } from 'express';
import AuthRouter from './auth';

const v1BaseRouter = Router();

v1BaseRouter.use('/auth', AuthRouter);

export default v1BaseRouter;
