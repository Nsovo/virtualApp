import { Component, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import {CustomerService} from "./customer.service";
import { Order } from "../shared/order.model";
import {Kinvey} from "kinvey-nativescript-sdk";

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})

export class CustomersComponent
    implements OnInit {
     orders: Array<Order>;

  constructor(private customerService: CustomerService) {
     this.orders = [{ product_name:'Test', customer_name:'Test',size:'1', customer_location:'Mdavula stand 305', quantity:'2'},
         { product_name:'Test', customer_name:'Test',size:'1', customer_location:'Mdavula stand 305', quantity:'2'},
         { product_name:'Test', customer_name:'Test',size:'1', customer_location:'Mdavula stand 305', quantity:'2'}];

      let dataStore = Kinvey.DataStore.collection('order',Kinvey.DataStoreType.Cache);
      dataStore.find().subscribe(function onNext(entities) {
          entities.forEach(function (value) {
              console.log('######');
              console.log(value.customer_name);

          });

         // orders.push(entities);
      }, function onError(error) {
          console.log(error)
      }, function onComplete() {
          //console.log('Finished pulling orders data');
      });


  }

  editOrder() {
  }

  ngOnInit() { }
}
export class CustomersModule { }

