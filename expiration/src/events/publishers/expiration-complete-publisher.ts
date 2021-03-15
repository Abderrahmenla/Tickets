import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@abderrahmenlh/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}