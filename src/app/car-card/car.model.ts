export class Car {
    
    model: string;
    price: string;
    picture: string;

    constructor ({model, price, picture} : {model:string, price:string, picture:string}){
        this.model = model;
        this.price = price;
        this.picture = picture;
    }
}