import express from 'express';

import CompanyRouter from './CompanyRouter.js';

const router = express();

router.use("/company", CompanyRouter);

export default router;