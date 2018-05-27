import { Component, OnInit } from '@angular/core';
import { Order } from "../shared/order.model";
import { alert } from "tns-core-modules/ui/dialogs";
import { Router } from "@angular/router";
import { OrderService} from "../shared/order.service";

@Component({
  moduleId: module.id,
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
    providers: [OrderService]
})
export class SalesComponent implements OnInit {
    product_name;
    size;
    quantity;
    customer_name;
    customer_location;
  public  orderService: OrderService;

  constructor(private router: Router, orderService: OrderService) {
    this.orderService = orderService;
  }

  ngOnInit() { }

  submit() {
      console.log('HERE');
      console.log(this.product_name);

      this.orderService.add(this.product_name, this.size,this.quantity, this.customer_name,this.customer_location)
          .then(() => {
              this.clear();
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
      this.product_name='';
      this.size = 0;
      this.quantity='';
      this.customer_name='';
      this.customer_location='';
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
