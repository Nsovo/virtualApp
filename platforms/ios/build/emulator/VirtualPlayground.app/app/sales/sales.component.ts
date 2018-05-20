import { Component, OnInit } from '@angular/core';
import { Order } from "../shared/order.model";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { alert } from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";
const dataStore = Kinvey.DataStore.collection('order');

@Component({
  moduleId: module.id,
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  order:Order;
  constructor(private router: Router) {
    this.order = new Order();
  }

  ngOnInit() { }

  submit() {

      const entityOrder = new Order();
      entityOrder.size='1';
      entityOrder.product_name ='test';

      const response = dataStore.save(entityOrder).then(function (response) {
          return response
      })
      .catch(function onError(error) {
          return error;
      });


     // if(true )
          this.alert("You have successfully save.");
          this.clear();
      //else
         // this.alert("Error try again or contact administrator.");


  }

  exit(){
      this.router.navigate(["/login"]);
  }

  view(){
      this.router.navigate(["/customers"]);
  }

  clear(){
      this.order.product_name='';
      this.order.size ='';
      this.order.quantity='';
      this.order.customer_name='';
      this.order.customer_location='';
  }

  alert(message: string) {
        return alert({
            title: "VIRTUAL SHOP",
            okButtonText: "OK",
            message: message
        });
    }
}
export class SalesModule { }
