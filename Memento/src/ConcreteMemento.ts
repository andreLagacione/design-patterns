import { Memento } from "./interfaces/Memento";

export class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): string {
        return this.state
    }

    getName(): string {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }

    getDate(): string {
        return this.date;
    }
}