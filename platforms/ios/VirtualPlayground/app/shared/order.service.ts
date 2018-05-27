import { Injectable, NgZone } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {Kinvey} from "kinvey-nativescript-sdk";
import { Order } from "./order.model";

@Injectable()
export class OrderService {
    items: BehaviorSubject<Array<Order>> = new BehaviorSubject<Array<Order>>([]);
    private allItems: Array<Order> = [];
    private dataStore = Kinvey.DataStore.collection<Order>('order');

    constructor(private zone: NgZone) { }

    load() {
        let promise = Promise.resolve();
        return promise.then(() => {
            let stream = this.dataStore.find();
            return stream.toPromise();
        }).then((data) => {
            this.allItems = [];
            data.forEach((order) => {
                this.allItems.push(
                    new Order(
                        order._id,
                        order.product_name,
                        order.size,
                        order.quantity,
                        order.customer_name,
                        order.customer_location,
                        order.done || false,
                        order.deleted || false
                    )
                );
            });
        }).catch((error) => {
        });
    }

    add(product_name: string,size: number, quantity: string, customer_name: string, customer_location: string) {
        return this.dataStore.save({ name: name })
            .then((data) => {
                this.allItems.unshift(new Order(data._id, product_name,size,quantity,customer_name,customer_location,
                    false, false));
                this.publishUpdates();
            })
            .catch(this.handleErrors);
    }

    private publishUpdates() {
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
            // must emit a *new* value (immutability!)
            const newVal = [...this.allItems];
            this.items.next(newVal);
        });
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}


