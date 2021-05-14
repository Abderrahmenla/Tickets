import { Subjects, Publisher, PaymentCreatedEvent } from '@abderrahmenlh/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}