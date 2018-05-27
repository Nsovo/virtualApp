import { Component, OnInit ,ChangeDetectionStrategy, EventEmitter, Input, Output} from '@angular/core';
import { OrderService} from "../shared/order.service";
import * as utils from "utils/utils";
import { Order } from "../shared/order.model";

declare var UIColor: any;

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})

export class CustomersComponent
    implements OnInit {
    @Input() showDeleted: boolean;
    @Input() row;
    @Output() loading = new EventEmitter();
    @Output() loaded = new EventEmitter();
    listLoaded = false;
    public  orders: OrderService;

  constructor(orders: OrderService) {
     this.orders = orders;
  }
    load() {
        this.loading.next("");
        this.orders.load()
            .then(() => {
                this.loaded.next("");
                this.listLoaded = true;
            }).catch(() => {
            alert("An error occurred loading your grocery list.");
        });
    }

    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    makeBackgroundTransparent(args) {
        let cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    }

    imageSource(grocery) {
        if (grocery.deleted) {
            return grocery.done ? "res://selected" : "res://nonselected";
        }
        return grocery.done ? "res://checked" : "res://unchecked";
    }

    toggleDone(order: Order) {
        if (order.deleted) {
            order.done = !order.done;
            return;
        }

       /* this.orders.toggleDoneFlag(grocery)
            .catch(() => {
                alert("An error occurred managing your grocery list.");
            });
    }

    delete(order: Order) {
        this.loading.next("");
        let successHandler = () => this.loaded.next("");
        let errorHandler = () => {
            alert("An error occurred while deleting an item from your list.");
            this.loaded.next("");
        };

        let actionPromise;

        /*   if (grocery.deleted) {
               actionPromise = this.orders.permanentlyDelete(grocery);
           } else {
               actionPromise = this.orders.setDeleteFlag(grocery);
           }
           return actionPromise
               .then(successHandler)
               .catch(errorHandler); */
       }


  editOrder() {
  }

  ngOnInit() { }
}
export class CustomersModule { }

