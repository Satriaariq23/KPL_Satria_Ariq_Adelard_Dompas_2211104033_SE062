class ConcreteSubject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObservers(message) {
        // Create a shallow copy to avoid issues if observers are modified during notification
        [...this.observers].forEach(observer => {
            if (observer && typeof observer.update === 'function') {
                observer.update(message);
            }
        });
    }
}
