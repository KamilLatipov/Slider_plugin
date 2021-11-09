interface Subject {
    attach(eventName: string, fn: (args?: any) => void): void;
    notify(eventName: string, args: any): void;
}

class Publisher implements Subject{
    events: {[key: string]: any} = {};
    attach(eventName: string, fn: (args?: any) => void): void {
        this.events[eventName] = fn;
    }
    notify(eventName: string, args?: any): void {
        let evokeFunc = this.events[eventName];
        evokeFunc(args);
    }
}

export default Publisher;