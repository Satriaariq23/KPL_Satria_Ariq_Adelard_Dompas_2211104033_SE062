export class Subject {
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
    // Salin array untuk menghindari masalah saat removeObserver dipanggil dalam update
    [...this.observers].forEach(observer => {
      observer.update(message);
    });
  }
}
