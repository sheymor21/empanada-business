export class GetEmpanadaDto {
    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    readonly id: string;
    readonly name: string;
    readonly price: number;
}