export interface IArticle {
    id?: number;
    name?: string;
    quantity?: string;
}

export class Article implements IArticle {
    constructor(public id?: number, public name?: string, public quantity?: string) {}
}
