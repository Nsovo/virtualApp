
import { Kinvey } from 'kinvey-nativescript-sdk';

export class Order  implements Kinvey.Entity {
    constructor(
    public _id: string,
    public product_name: string,
    public size: number,
    public quantity: string,
    public customer_name: string,
    public customer_location: string,
    public done: boolean,
    public deleted: boolean
   ) {}
}