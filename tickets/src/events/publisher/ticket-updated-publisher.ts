import { Publisher, Subjects, TicketUpdatedEvent } from '@abderrahmenlh/common'
export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}