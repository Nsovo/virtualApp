import { Injectable } from '@angular/core';
import {Kinvey} from "kinvey-nativescript-sdk";

@Injectable()
export class CustomerService {
    constructor() { }
    getOrders( ) {
        let orders = [];
        let dataStore
            = Kinvey.DataStore.collection('order',Kinvey.DataStoreType.Cache);

        const query = new Kinvey.Query();


       var orderData = dataStore.find().subscribe(function onNext(entities) {
            orders.push(entities);
        }, function onError(error) {
            console.log(error)
        }, function onComplete() {
            console.log('Finished pulling orders data');
        });

        return orders;
    }
}


