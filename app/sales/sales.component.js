"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_model_1 = require("../shared/order.model");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var router_1 = require("@angular/router");
var dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('order');
var SalesComponent = (function () {
    function SalesComponent(router) {
        this.router = router;
        this.order = new order_model_1.Order();
    }
    SalesComponent.prototype.ngOnInit = function () { };
    SalesComponent.prototype.submit = function () {
        var entityOrder = new order_model_1.Order();
        entityOrder.size = '1';
        entityOrder.product_name = 'test';
        var response = dataStore.save(entityOrder).then(function (response) {
            return response;
        })
            .catch(function onError(error) {
            return error;
        });
        // if(true )
        this.alert("You have successfully save.");
        this.clear();
        //else
        // this.alert("Error try again or contact administrator.");
    };
    SalesComponent.prototype.exit = function () {
        this.router.navigate(["/login"]);
    };
    SalesComponent.prototype.viewCustomers = function () {
        this.router.navigate(["/customerDetails"]);
    };
    SalesComponent.prototype.clear = function () {
        this.order.product_name = '';
        this.order.size = '';
    };
    SalesComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "APP NAME",
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
        __metadata("design:paramtypes", [router_1.Router])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUE4QztBQUM5QyxtRUFBaUQ7QUFDakQsdURBQW9EO0FBQ3BELDBDQUF5QztBQUN6QyxJQUFNLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFVdkQ7SUFFRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQkFBTSxHQUFOO1FBRUksSUFBTSxXQUFXLEdBQUcsSUFBSSxtQkFBSyxFQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDckIsV0FBVyxDQUFDLFlBQVksR0FBRSxNQUFNLENBQUM7UUFJakMsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ2hFLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGlCQUFpQixLQUFLO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFHSixZQUFZO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixNQUFNO1FBQ0gsMkRBQTJEO0lBR2xFLENBQUM7SUFDRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxzQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sT0FBZTtRQUNmLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsVUFBVTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBbERRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBRzRCLGVBQU07T0FGdkIsY0FBYyxDQW9EMUI7SUFBRCxxQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHdDQUFjO0FBcUQzQjtJQUFBO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9zaGFyZWQvb3JkZXIubW9kZWxcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuY29uc3QgZGF0YVN0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCdvcmRlcicpO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXNhbGVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NhbGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2FsZXMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNhbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3JkZXI6T3JkZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLm9yZGVyID0gbmV3IE9yZGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHN1Ym1pdCgpIHtcblxuICAgICAgY29uc3QgZW50aXR5T3JkZXIgPSBuZXcgT3JkZXIoKTtcbiAgICAgIGVudGl0eU9yZGVyLnNpemU9JzEnO1xuICAgICAgZW50aXR5T3JkZXIucHJvZHVjdF9uYW1lID0ndGVzdCc7XG5cblxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGRhdGFTdG9yZS5zYXZlKGVudGl0eU9yZGVyKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG5cblxuICAgICAvLyBpZih0cnVlIClcbiAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHNhdmUuXCIpO1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIC8vZWxzZVxuICAgICAgICAgLy8gdGhpcy5hbGVydChcIkVycm9yIHRyeSBhZ2FpbiBvciBjb250YWN0IGFkbWluaXN0cmF0b3IuXCIpO1xuXG5cbiAgfVxuICBleGl0KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG4gIHZpZXdDdXN0b21lcnMoKXtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jdXN0b21lckRldGFpbHNcIl0pO1xuICB9XG5cbiAgY2xlYXIoKXtcbiAgICAgIHRoaXMub3JkZXIucHJvZHVjdF9uYW1lPScnO1xuICAgICAgdGhpcy5vcmRlci5zaXplID0nJztcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbmV4cG9ydCBjbGFzcyBTYWxlc01vZHVsZSB7IH1cbiJdfQ==