import { Component, OnInit } from '@angular/core';
import { Order } from "../shared/order.model";
import { Kinvey } from 'kinvey-nativescript-sdk';
const dataStore = Kinvey.DataStore.collection('order');


@Component({
  moduleId: module.id,
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  order:Order;
  constructor() {
    this.order = new Order();
  }

  ngOnInit() { }

  submit() {
      this.order.product_name = 'Test';
      this.order.customer_location = 'Test';
      this.order.customer_name = 'Test';
      this.order.quantity= 'Test';
      this.order.size = 'Test';

      const promise = dataStore.save({
          _id: '1',
          field: 'value'
      }).then(function onSuccess(entity) {
          return entity;
          // ...
      }).catch(function onError(error) {
          return error;
      });
    console.log('HERE PROMISE *********************');

      console.log(JSON.stringify(promise.then()))
  }


}
export class SalesModule { }
