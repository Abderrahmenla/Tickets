import express, { Request, Response } from 'express'
import { requireAuth, validateRequest } from '@abderrahmenlh/common'
import { body } from 'express-validator'

const router = express.Router();
router.post('/api/orders', requireAuth, [
  body('ticketId')
    .not()
    .isEmpty()
    .withMessage('TickeId must be provided'),
], async (req: Request, res: Response) => {
  res.send({});
});
export { router as newOrderRouter };