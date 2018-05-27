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
        console.log('HERE');
        console.log(this.product_name);
        /* this.orderService.add(this.product_name, this.size,this.quantity, this.customer_name,this.customer_location)
             .then(() => {
                 this.clear();
                // this.hideActivityIndicator();
                 this.alert("You have successfully save.");
                 this.clear();
             })
             .catch(() => {
                 this.alert("An error occurred while adding an item to your list.");
                 //this.hideActivityIndicator();
             }); */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHVEQUFvRDtBQUNwRCwwQ0FBeUM7QUFDekMseURBQXNEO0FBU3REO0lBUUUsd0JBQW9CLE1BQWMsRUFBRSxZQUEwQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhDOzs7Ozs7Ozs7O21CQVVXO0lBQ2QsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2YsTUFBTSxDQUFDLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxjQUFjO1lBQ3JCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyRFEsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDbEMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDO3lDQVM0QixlQUFNLEVBQWdCLDRCQUFZO09BUm5ELGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3Q0FBYztBQXVEM0I7SUFBQTtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vc2hhcmVkL29yZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE9yZGVyU2VydmljZX0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zYWxlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYWxlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhbGVzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtPcmRlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm9kdWN0X25hbWU7XG4gICAgc2l6ZTtcbiAgICBxdWFudGl0eTtcbiAgICBjdXN0b21lcl9uYW1lO1xuICAgIGN1c3RvbWVyX2xvY2F0aW9uO1xuICBwdWJsaWMgIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIG9yZGVyU2VydmljZTogT3JkZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5vcmRlclNlcnZpY2UgPSBvcmRlclNlcnZpY2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHN1Ym1pdCgpe1xuICAgICAgY29uc29sZS5sb2coJ0hFUkUnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9uYW1lKTtcblxuICAgICAvKiB0aGlzLm9yZGVyU2VydmljZS5hZGQodGhpcy5wcm9kdWN0X25hbWUsIHRoaXMuc2l6ZSx0aGlzLnF1YW50aXR5LCB0aGlzLmN1c3RvbWVyX25hbWUsdGhpcy5jdXN0b21lcl9sb2NhdGlvbilcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAvLyB0aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNhdmUuXCIpO1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiKTtcbiAgICAgICAgICAgICAgLy90aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICAgIH0pOyAqL1xuICB9XG5cbiAgZXhpdCgpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxuXG4gIHZpZXcoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdXN0b21lcnNcIl0pO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICAgIHRoaXMucHJvZHVjdF9uYW1lPScnO1xuICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgIHRoaXMucXVhbnRpdHk9Jyc7XG4gICAgICB0aGlzLmN1c3RvbWVyX25hbWU9Jyc7XG4gICAgICB0aGlzLmN1c3RvbWVyX2xvY2F0aW9uPScnO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJWSVJUVUFMIFNIT1BcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2FsZXNNb2R1bGUgeyB9XG4iXX0=