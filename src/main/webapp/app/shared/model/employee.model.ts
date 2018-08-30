export interface IEmployee {
    id?: number;
    name?: string;
    department?: string;
    q?: string;
}

export class Employee implements IEmployee {
    constructor(public id?: number, public name?: string, public department?: string, public q?: string) {}
}
