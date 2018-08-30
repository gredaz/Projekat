import { IClient } from 'app/shared/model//client.model';

export interface ICity {
    id?: number;
    city?: string;
    clients?: IClient[];
}

export class City implements ICity {
    constructor(public id?: number, public city?: string, public clients?: IClient[]) {}
}
