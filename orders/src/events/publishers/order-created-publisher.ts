import { Publisher, OrderCreatedEvent, Subjects } from '@abderrahmenlh/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}