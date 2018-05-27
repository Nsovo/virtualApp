import { Component, OnInit } from '@angular/core';
import { Order } from "../shared/order.model";
import { alert } from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";
import { OrderService} from "../shared/order.service";

@Component({
  moduleId: module.id,
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  order:Order;
    public  orderService: OrderService;

  constructor(private router: Router, orderService: OrderService) {
    this.orderService = orderService
  }

  ngOnInit() { }

  submit() {
      console.log('HERE');
      this.orderService.add(this.order.product_name, this.order.size,this.order.quantity, this.order.customer_name,this.order.customer_location)
          .then(() => {
              this.order = new Order('','',0,'','','',false,false);
             // this.hideActivityIndicator();
              this.alert("You have successfully save.");
              this.clear();
          })
          .catch(() => {
              this.alert("An error occurred while adding an item to your list.");
              //this.hideActivityIndicator();
          });
  }

  exit(){
      this.router.navigate(["/login"]);
  }

  view(){
      this.router.navigate(["/customers"]);
  }

  clear(){
      this.order.product_name='';
      this.order.size = 0;
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
