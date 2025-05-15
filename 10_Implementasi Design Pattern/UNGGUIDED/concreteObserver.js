import { Observer } from './observer.js';

export class ConcreteObserver extends Observer {
  constructor(name, subject) {
    super();
    this.name = name;
    this.subject = subject;
    this.notificationCount = 0;

    subject.addObserver(this);
  }

  update(message) {
    this.notificationCount++;
    console.log(`${this.name} received: ${message}`);

    if (this.notificationCount >= 3) {
      console.log(`${this.name} unsubscribed after 3 notifications.`);
      this.subject.removeObserver(this);
    }
  }
}
