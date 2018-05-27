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
        console.log('HERE');
        console.log(this.product_name);
        this.orderService.add(this.product_name, this.size, this.quantity, this.customer_name, this.customer_location)
            .then(function () {
            _this.clear();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHVEQUFvRDtBQUNwRCwwQ0FBeUM7QUFDekMseURBQXNEO0FBU3REO0lBUUUsd0JBQW9CLE1BQWMsRUFBRSxZQUEwQjtRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFRCxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtCQUFNLEdBQU47UUFBQSxpQkFlQztRQWRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7YUFDdkcsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsZ0NBQWdDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ0gsS0FBSSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ25FLCtCQUErQjtRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sT0FBZTtRQUNmLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsY0FBYztZQUNyQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckRRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzt5Q0FTNEIsZUFBTSxFQUFnQiw0QkFBWTtPQVJuRCxjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksd0NBQWM7QUF1RDNCO0lBQUE7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUE1QixJQUE0QjtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5tb2RlbFwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPcmRlclNlcnZpY2V9IGZyb20gXCIuLi9zaGFyZWQvb3JkZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2FsZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FsZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYWxlcy5jb21wb25lbnQuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbT3JkZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTYWxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvZHVjdF9uYW1lO1xuICAgIHNpemU7XG4gICAgcXVhbnRpdHk7XG4gICAgY3VzdG9tZXJfbmFtZTtcbiAgICBjdXN0b21lcl9sb2NhdGlvbjtcbiAgcHVibGljICBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBvcmRlclNlcnZpY2U6IE9yZGVyU2VydmljZSkge1xuICAgIHRoaXMub3JkZXJTZXJ2aWNlID0gb3JkZXJTZXJ2aWNlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnSEVSRScpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0X25hbWUpO1xuXG4gICAgICB0aGlzLm9yZGVyU2VydmljZS5hZGQodGhpcy5wcm9kdWN0X25hbWUsIHRoaXMuc2l6ZSx0aGlzLnF1YW50aXR5LCB0aGlzLmN1c3RvbWVyX25hbWUsdGhpcy5jdXN0b21lcl9sb2NhdGlvbilcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAvLyB0aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNhdmUuXCIpO1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiKTtcbiAgICAgICAgICAgICAgLy90aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICAgIH0pO1xuICB9XG5cbiAgZXhpdCgpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxuXG4gIHZpZXcoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdXN0b21lcnNcIl0pO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICAgIHRoaXMucHJvZHVjdF9uYW1lPScnO1xuICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgIHRoaXMucXVhbnRpdHk9Jyc7XG4gICAgICB0aGlzLmN1c3RvbWVyX25hbWU9Jyc7XG4gICAgICB0aGlzLmN1c3RvbWVyX2xvY2F0aW9uPScnO1xuICB9XG5cbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJWSVJUVUFMIFNIT1BcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2FsZXNNb2R1bGUgeyB9XG4iXX0=