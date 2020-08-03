export default class ConcreteSubject {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    this.observers.push(observer);
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}