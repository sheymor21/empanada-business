export class GetOrderEmpanadas {
    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    readonly name: string;
    readonly price: number;
    readonly quantity: number
}