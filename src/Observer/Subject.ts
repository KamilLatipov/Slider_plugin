export default class Subject {
  private observers: Map<string, (data: any) => void> = new Map<string, (data: any) => void>() ;

  public attach(name: string, method: () => void): void {
    this.observers.set(name, method);
  }

  public notify(name: string, data: any): void {
    const method = this.observers.get(name);
    method(data);
  }
} 