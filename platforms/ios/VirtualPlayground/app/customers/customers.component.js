"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("../shared/order.service");
var utils = require("utils/utils");
var CustomersComponent = (function () {
    function CustomersComponent(orders) {
        this.loading = new core_1.EventEmitter();
        this.loaded = new core_1.EventEmitter();
        this.listLoaded = false;
        this.orders = orders;
    }
    CustomersComponent.prototype.load = function () {
        var _this = this;
        this.loading.next("");
        this.orders.load()
            .then(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
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
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CustomersComponent.prototype, "loading", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CustomersComponent.prototype, "loaded", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUc7QUFDdkcseURBQXNEO0FBQ3RELG1DQUFxQztBQVlyQztJQVNFLDRCQUFZLE1BQW9CO1FBTHBCLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBQ0MsaUNBQUksR0FBSjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDYixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDVCxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsa0RBQWtEO0lBQ2xELHNEQUF5QixHQUF6QixVQUEwQixJQUFJO1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNQLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekUsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBTztRQUNmLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO1FBQ2pFLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7SUFDOUQsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxLQUFZO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBdUJnQztJQUNoQyxDQUFDO0lBR04sc0NBQVMsR0FBVDtJQUNBLENBQUM7SUFFRCxxQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQTFFSDtRQUFSLFlBQUssRUFBRTs7MkRBQXNCO0lBQ3JCO1FBQVIsWUFBSyxFQUFFOzttREFBSztJQUNIO1FBQVQsYUFBTSxFQUFFOzt1REFBOEI7SUFDN0I7UUFBVCxhQUFNLEVBQUU7O3NEQUE2QjtJQUw3QixrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBV29CLDRCQUFZO09BVHJCLGtCQUFrQixDQTZFOUI7SUFBRCx5QkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLGdEQUFrQjtBQThFL0I7SUFBQTtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBQWhDLElBQWdDO0FBQW5CLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL29yZGVyLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vc2hhcmVkL29yZGVyLm1vZGVsXCI7XG5cbmRlY2xhcmUgdmFyIFVJQ29sb3I6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lcnMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21lcnNDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgc2hvd0RlbGV0ZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcm93O1xuICAgIEBPdXRwdXQoKSBsb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyAgb3JkZXJzOiBPcmRlclNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3Iob3JkZXJzOiBPcmRlclNlcnZpY2UpIHtcbiAgICAgdGhpcy5vcmRlcnMgPSBvcmRlcnM7XG4gIH1cbiAgICBsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcubmV4dChcIlwiKTtcbiAgICAgICAgdGhpcy5vcmRlcnMubG9hZCgpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBsb2FkaW5nIHlvdXIgZ3JvY2VyeSBsaXN0LlwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyB0cmljayBtYWtlcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBlYWNoIGNlbGxcbiAgICAvLyBpbiB0aGUgVUlUYWJsZVZpZXcgdHJhbnNwYXJlbnQgYXMgaXTigJlzIGNyZWF0ZWQuXG4gICAgbWFrZUJhY2tncm91bmRUcmFuc3BhcmVudChhcmdzKSB7XG4gICAgICAgIGxldCBjZWxsID0gYXJncy5pb3M7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IFhDb2RlIDhcbiAgICAgICAgICAgIGNlbGwuYmFja2dyb3VuZENvbG9yID0gdXRpbHMuaW9zLmdldHRlcihVSUNvbG9yLCBVSUNvbG9yLmNsZWFyQ29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW1hZ2VTb3VyY2UoZ3JvY2VyeSkge1xuICAgICAgICBpZiAoZ3JvY2VyeS5kZWxldGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvY2VyeS5kb25lID8gXCJyZXM6Ly9zZWxlY3RlZFwiIDogXCJyZXM6Ly9ub25zZWxlY3RlZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm9jZXJ5LmRvbmUgPyBcInJlczovL2NoZWNrZWRcIiA6IFwicmVzOi8vdW5jaGVja2VkXCI7XG4gICAgfVxuXG4gICAgdG9nZ2xlRG9uZShvcmRlcjogT3JkZXIpIHtcbiAgICAgICAgaWYgKG9yZGVyLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIG9yZGVyLmRvbmUgPSAhb3JkZXIuZG9uZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgLyogdGhpcy5vcmRlcnMudG9nZ2xlRG9uZUZsYWcoZ3JvY2VyeSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBtYW5hZ2luZyB5b3VyIGdyb2NlcnkgbGlzdC5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGUob3JkZXI6IE9yZGVyKSB7XG4gICAgICAgIHRoaXMubG9hZGluZy5uZXh0KFwiXCIpO1xuICAgICAgICBsZXQgc3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB0aGlzLmxvYWRlZC5uZXh0KFwiXCIpO1xuICAgICAgICBsZXQgZXJyb3JIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFjdGlvblByb21pc2U7XG5cbiAgICAgICAgLyogICBpZiAoZ3JvY2VyeS5kZWxldGVkKSB7XG4gICAgICAgICAgICAgICBhY3Rpb25Qcm9taXNlID0gdGhpcy5vcmRlcnMucGVybWFuZW50bHlEZWxldGUoZ3JvY2VyeSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICBhY3Rpb25Qcm9taXNlID0gdGhpcy5vcmRlcnMuc2V0RGVsZXRlRmxhZyhncm9jZXJ5KTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gYWN0aW9uUHJvbWlzZVxuICAgICAgICAgICAgICAgLnRoZW4oc3VjY2Vzc0hhbmRsZXIpXG4gICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKTsgKi9cbiAgICAgICB9XG5cblxuICBlZGl0T3JkZXIoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxufVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyc01vZHVsZSB7IH1cblxuIl19