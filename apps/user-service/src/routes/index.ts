import { Router } from 'express';
// import UserRoute from './UserRoute';
import SessionRoute from './SessionRoute';

const router = Router();
// router.use(UserRoute);
router.use(SessionRoute)

export default router