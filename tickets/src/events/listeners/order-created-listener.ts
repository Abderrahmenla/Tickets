import { Listener, OrderCancelledEvent, OrderCreatedEvent, Subjects } from '@abderrahmenlh/common'
import { queueGroupName } from './queue-group-name'
import { Message } from 'node-nats-streaming'
import { Ticket } from '../../models/ticket';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;
  async onMessage(data: OrderCreatedEvent['data'],msg:Message) {
    // Find the ticket that the order is reserving 
    const ticket = await Ticket.findById(data.ticket.id);

    // If no ticket, throw error 
    if (!ticket) throw new Error('Ticket not found');

    // Mark the ticket as being reserved by setting its property
    ticket.set({ orderId: data.id });

    // save the ticket ack the message
    await ticket.save();

    // ack the message
    msg.ack();
  }
}