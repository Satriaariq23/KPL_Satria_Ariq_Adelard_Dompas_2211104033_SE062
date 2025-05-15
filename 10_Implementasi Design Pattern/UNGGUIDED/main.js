import { Subject } from "./subject.js";
import { ConcreteObserver } from "./concreteObserver.js";

const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1", subject);
const observer2 = new ConcreteObserver("Observer 2", subject);

subject.notifyObservers("First Notification");
subject.notifyObservers("Second Notification");
subject.notifyObservers("Third Notification");
subject.notifyObservers("Fourth Notification");
