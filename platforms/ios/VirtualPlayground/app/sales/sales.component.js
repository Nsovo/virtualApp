"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        // do validation
        this.orderService.add(this.product_name, this.size, this.quantity, this.customer_name, this.customer_location)
            .then(function () {
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
        this.product_name = '';
        this.size = 0;
        this.quantity = '';
        this.customer_name = '';
        this.customer_location = '';
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
            styleUrls: ['./sales.component.css'],
            providers: [order_service_1.OrderService]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHVEQUFvRDtBQUNwRCwwQ0FBeUM7QUFDekMseURBQXNEO0FBU3REO0lBUUUsd0JBQW9CLE1BQWMsRUFBRSxZQUEwQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtCQUFNLEdBQU47UUFBQSxpQkFZQztRQVhILGdCQUFnQjtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3RHLElBQUksQ0FBQztZQUNILGdDQUFnQztZQUMvQixLQUFJLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztZQUNuRSwrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLE9BQWU7UUFDZixNQUFNLENBQUMsZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLGNBQWM7WUFDckIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxEUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNsQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7eUNBUzRCLGVBQU0sRUFBZ0IsNEJBQVk7T0FSbkQsY0FBYyxDQW1EMUI7SUFBRCxxQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLHdDQUFjO0FBb0QzQjtJQUFBO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9yZGVyU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zYWxlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYWxlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhbGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtPcmRlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm9kdWN0X25hbWU7XG4gICAgc2l6ZTtcbiAgICBxdWFudGl0eTtcbiAgICBjdXN0b21lcl9uYW1lO1xuICAgIGN1c3RvbWVyX2xvY2F0aW9uO1xuICBwdWJsaWMgIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5vcmRlclNlcnZpY2UgPSBvcmRlclNlcnZpY2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHN1Ym1pdCgpe1xuLy8gZG8gdmFsaWRhdGlvblxuICAgICB0aGlzLm9yZGVyU2VydmljZS5hZGQodGhpcy5wcm9kdWN0X25hbWUsIHRoaXMuc2l6ZSx0aGlzLnF1YW50aXR5LCB0aGlzLmN1c3RvbWVyX25hbWUsdGhpcy5jdXN0b21lcl9sb2NhdGlvbilcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgLy8gdGhpcy5oaWRlQWN0aXZpdHlJbmRpY2F0b3IoKTtcbiAgICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzYXZlLlwiKTtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIik7XG4gICAgICAgICAgICAgIC8vdGhpcy5oaWRlQWN0aXZpdHlJbmRpY2F0b3IoKTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIGV4aXQoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gIH1cblxuICB2aWV3KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY3VzdG9tZXJzXCJdKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgICB0aGlzLnByb2R1Y3RfbmFtZT0nJztcbiAgICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgICB0aGlzLnF1YW50aXR5PScnO1xuICAgICAgdGhpcy5jdXN0b21lcl9uYW1lPScnO1xuICAgICAgdGhpcy5jdXN0b21lcl9sb2NhdGlvbj0nJztcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiVklSVFVBTCBTSE9QXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNhbGVzTW9kdWxlIHsgfVxuIl19