"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("../shared/order.service");
var utils = require("utils/utils");
var CustomersComponent = (function () {
    function CustomersComponent(orderService) {
        this.orderService = orderService;
    }
    CustomersComponent.prototype.load = function () {
        this.orderService.load()
            .then(function (value) {
            console.log('what exactly are we loading');
            console.log(value);
        }).catch(function () {
            alert("An error occurred loading your grocery list.");
        });
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    CustomersComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    };
    CustomersComponent.prototype.imageSource = function (grocery) {
        if (grocery.deleted) {
            return grocery.done ? "res://selected" : "res://nonselected";
        }
        return grocery.done ? "res://checked" : "res://unchecked";
    };
    CustomersComponent.prototype.toggleDone = function (order) {
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
    };
    CustomersComponent.prototype.editOrder = function () {
    };
    CustomersComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CustomersComponent.prototype, "showDeleted", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CustomersComponent.prototype, "row", void 0);
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.scss'],
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], CustomersComponent);
    return CustomersComponent;
}());
exports.CustomersComponent = CustomersComponent;
var CustomersModule = (function () {
    function CustomersModule() {
    }
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUc7QUFDdkcseURBQXNEO0FBQ3RELG1DQUFxQztBQVlyQztJQU1FLDRCQUFZLFlBQTBCO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFDQyxpQ0FBSSxHQUFKO1FBRUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7YUFDbkIsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNULEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxrREFBa0Q7SUFDbEQsc0RBQXlCLEdBQXpCLFVBQTBCLElBQUk7UUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1Asa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RSxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFPO1FBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDakUsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUM5RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLEtBQVk7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDekIsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0F1QmdDO0lBQ2hDLENBQUM7SUFHTixzQ0FBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBeEVIO1FBQVIsWUFBSyxFQUFFOzsyREFBc0I7SUFDckI7UUFBUixZQUFLLEVBQUU7O21EQUFLO0lBSEosa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQVEwQiw0QkFBWTtPQU4zQixrQkFBa0IsQ0EyRTlCO0lBQUQseUJBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSxnREFBa0I7QUE0RS9CO0lBQUE7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5tb2RlbFwiO1xuXG5kZWNsYXJlIHZhciBVSUNvbG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHNob3dEZWxldGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJvdztcbiAgICBwdWJsaWMgIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlKSB7XG4gICAgICB0aGlzLm9yZGVyU2VydmljZSA9IG9yZGVyU2VydmljZTtcbiAgfVxuICAgIGxvYWQoKSB7XG5cbiAgICAgICAgdGhpcy5vcmRlclNlcnZpY2UubG9hZCgpXG4gICAgICAgICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2hhdCBleGFjdGx5IGFyZSB3ZSBsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBsb2FkaW5nIHlvdXIgZ3JvY2VyeSBsaXN0LlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIHRyaWNrIG1ha2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGVhY2ggY2VsbFxuICAgIC8vIGluIHRoZSBVSVRhYmxlVmlldyB0cmFuc3BhcmVudCBhcyBpdOKAmXMgY3JlYXRlZC5cbiAgICBtYWtlQmFja2dyb3VuZFRyYW5zcGFyZW50KGFyZ3MpIHtcbiAgICAgICAgbGV0IGNlbGwgPSBhcmdzLmlvcztcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgWENvZGUgOFxuICAgICAgICAgICAgY2VsbC5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5pb3MuZ2V0dGVyKFVJQ29sb3IsIFVJQ29sb3IuY2xlYXJDb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWFnZVNvdXJjZShncm9jZXJ5KSB7XG4gICAgICAgIGlmIChncm9jZXJ5LmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBncm9jZXJ5LmRvbmUgPyBcInJlczovL3NlbGVjdGVkXCIgOiBcInJlczovL25vbnNlbGVjdGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdyb2NlcnkuZG9uZSA/IFwicmVzOi8vY2hlY2tlZFwiIDogXCJyZXM6Ly91bmNoZWNrZWRcIjtcbiAgICB9XG5cbiAgICB0b2dnbGVEb25lKG9yZGVyOiBPcmRlcikge1xuICAgICAgICBpZiAob3JkZXIuZGVsZXRlZCkge1xuICAgICAgICAgICAgb3JkZXIuZG9uZSA9ICFvcmRlci5kb25lO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAvKiB0aGlzLm9yZGVycy50b2dnbGVEb25lRmxhZyhncm9jZXJ5KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIG1hbmFnaW5nIHlvdXIgZ3JvY2VyeSBsaXN0LlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZShvcmRlcjogT3JkZXIpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nLm5leHQoXCJcIik7XG4gICAgICAgIGxldCBzdWNjZXNzSGFuZGxlciA9ICgpID0+IHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgICAgIGxldCBlcnJvckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aW9uUHJvbWlzZTtcblxuICAgICAgICAvKiAgIGlmIChncm9jZXJ5LmRlbGV0ZWQpIHtcbiAgICAgICAgICAgICAgIGFjdGlvblByb21pc2UgPSB0aGlzLm9yZGVycy5wZXJtYW5lbnRseURlbGV0ZShncm9jZXJ5KTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGFjdGlvblByb21pc2UgPSB0aGlzLm9yZGVycy5zZXREZWxldGVGbGFnKGdyb2NlcnkpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiBhY3Rpb25Qcm9taXNlXG4gICAgICAgICAgICAgICAudGhlbihzdWNjZXNzSGFuZGxlcilcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvckhhbmRsZXIpOyAqL1xuICAgICAgIH1cblxuXG4gIGVkaXRPcmRlcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzTW9kdWxlIHsgfVxuXG4iXX0=