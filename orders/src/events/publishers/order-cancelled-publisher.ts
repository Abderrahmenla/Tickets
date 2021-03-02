import { Subjects, Publisher, OrderCancelledEvent } from '@abderrahmenlh/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}