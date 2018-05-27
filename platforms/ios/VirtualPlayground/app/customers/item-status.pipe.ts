import { Pipe, PipeTransform } from "@angular/core";

import { Order } from "../shared/order.model";

@Pipe({
    name: "itemStatus"
})
export class ItemStatusPipe implements PipeTransform {
    transform(items: Array<Order>, deleted: boolean) {
        let itemsToShow: Order[] = [];
        if (items && Array.isArray(items)) {
            itemsToShow = items.filter((order: Order) => {
                return order.deleted === deleted;
            });
        }
        return itemsToShow;
    }
}