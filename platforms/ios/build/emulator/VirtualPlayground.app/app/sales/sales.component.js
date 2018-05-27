"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_model_1 = require("../shared/order.model");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var router_1 = require("@angular/router");
var order_service_1 = require("../shared/order.service");
var SalesComponent = (function () {
    function SalesComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
    }
    SalesComponent.prototype.ngOnInit = function () { };
    SalesComponent.prototype.submit = function () {
        var _this = this;
        console.log('HERE');
        this.orderService.add(this.order.product_name, this.order.size, this.order.quantity, this.order.customer_name, this.order.customer_location)
            .then(function () {
            _this.order = new order_model_1.Order('', '', 0, '', '', '', false, false);
            // this.hideActivityIndicator();
            _this.alert("You have successfully save.");
            _this.clear();
        })
            .catch(function () {
            _this.alert("An error occurred while adding an item to your list.");
            //this.hideActivityIndicator();
        });
    };
    SalesComponent.prototype.exit = function () {
        this.router.navigate(["/login"]);
    };
    SalesComponent.prototype.view = function () {
        this.router.navigate(["/customers"]);
    };
    SalesComponent.prototype.clear = function () {
        this.order.product_name = '';
        this.order.size = 0;
        this.order.quantity = '';
        this.order.customer_name = '';
        this.order.customer_location = '';
    };
    SalesComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "VIRTUAL SHOP",
            okButtonText: "OK",
            message: message
        });
    };
    SalesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-sales',
            templateUrl: './sales.component.html',
            styleUrls: ['./sales.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, order_service_1.OrderService])
    ], SalesComponent);
    return SalesComponent;
}());
exports.SalesComponent = SalesComponent;
var SalesModule = (function () {
    function SalesModule() {
    }
    return SalesModule;
}());
exports.SalesModule = SalesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUE4QztBQUM5Qyx1REFBb0Q7QUFDcEQsMENBQXlDO0FBQ3pDLHlEQUFzRDtBQVF0RDtJQUlFLHdCQUFvQixNQUFjLEVBQUUsWUFBMEI7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtJQUNsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQkFBTSxHQUFOO1FBQUEsaUJBYUM7UUFaRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7YUFDckksSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELGdDQUFnQztZQUMvQixLQUFJLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUNuRSwrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLE9BQWU7UUFDZixNQUFNLENBQUMsZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLGNBQWM7WUFDckIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9DUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUs0QixlQUFNLEVBQWdCLDRCQUFZO09BSm5ELGNBQWMsQ0FnRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSx3Q0FBYztBQWlEM0I7SUFBQTtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vc2hhcmVkL29yZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9yZGVyU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zYWxlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYWxlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhbGVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTYWxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9yZGVyOk9yZGVyO1xuICAgIHB1YmxpYyAgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgb3JkZXJTZXJ2aWNlOiBPcmRlclNlcnZpY2UpIHtcbiAgICB0aGlzLm9yZGVyU2VydmljZSA9IG9yZGVyU2VydmljZVxuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnSEVSRScpO1xuICAgICAgdGhpcy5vcmRlclNlcnZpY2UuYWRkKHRoaXMub3JkZXIucHJvZHVjdF9uYW1lLCB0aGlzLm9yZGVyLnNpemUsdGhpcy5vcmRlci5xdWFudGl0eSwgdGhpcy5vcmRlci5jdXN0b21lcl9uYW1lLHRoaXMub3JkZXIuY3VzdG9tZXJfbG9jYXRpb24pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9yZGVyID0gbmV3IE9yZGVyKCcnLCcnLDAsJycsJycsJycsZmFsc2UsZmFsc2UpO1xuICAgICAgICAgICAgIC8vIHRoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgc2F2ZS5cIik7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIpO1xuICAgICAgICAgICAgICAvL3RoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgICAgfSk7XG4gIH1cblxuICBleGl0KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG5cbiAgdmlldygpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N1c3RvbWVyc1wiXSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgICAgdGhpcy5vcmRlci5wcm9kdWN0X25hbWU9Jyc7XG4gICAgICB0aGlzLm9yZGVyLnNpemUgPSAwO1xuICAgICAgdGhpcy5vcmRlci5xdWFudGl0eT0nJztcbiAgICAgIHRoaXMub3JkZXIuY3VzdG9tZXJfbmFtZT0nJztcbiAgICAgIHRoaXMub3JkZXIuY3VzdG9tZXJfbG9jYXRpb249Jyc7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlZJUlRVQUwgU0hPUFwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTYWxlc01vZHVsZSB7IH1cbiJdfQ==