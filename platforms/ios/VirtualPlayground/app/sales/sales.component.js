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
    SalesComponent.prototype.view = function () {
        this.router.navigate(["/customers"]);
    };
    SalesComponent.prototype.clear = function () {
        this.order.product_name = '';
        this.order.size = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUE4QztBQUM5QyxtRUFBaUQ7QUFDakQsdURBQW9EO0FBQ3BELDBDQUF5QztBQUN6QyxJQUFNLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFRdkQ7SUFFRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQkFBTSxHQUFOO1FBRUksSUFBTSxXQUFXLEdBQUcsSUFBSSxtQkFBSyxFQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDckIsV0FBVyxDQUFDLFlBQVksR0FBRSxNQUFNLENBQUM7UUFFakMsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ2hFLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGlCQUFpQixLQUFLO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFHSixZQUFZO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixNQUFNO1FBQ0gsMkRBQTJEO0lBR2xFLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFFLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sT0FBZTtRQUNmLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsY0FBYztZQUNyQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBckRRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBRzRCLGVBQU07T0FGdkIsY0FBYyxDQXNEMUI7SUFBRCxxQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHdDQUFjO0FBdUQzQjtJQUFBO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9zaGFyZWQvb3JkZXIubW9kZWxcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuY29uc3QgZGF0YVN0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCdvcmRlcicpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2FsZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FsZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYWxlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2FsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBvcmRlcjpPcmRlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMub3JkZXIgPSBuZXcgT3JkZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgc3VibWl0KCkge1xuXG4gICAgICBjb25zdCBlbnRpdHlPcmRlciA9IG5ldyBPcmRlcigpO1xuICAgICAgZW50aXR5T3JkZXIuc2l6ZT0nMSc7XG4gICAgICBlbnRpdHlPcmRlci5wcm9kdWN0X25hbWUgPSd0ZXN0JztcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBkYXRhU3RvcmUuc2F2ZShlbnRpdHlPcmRlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuXG5cbiAgICAgLy8gaWYodHJ1ZSApXG4gICAgICAgICAgdGhpcy5hbGVydChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzYXZlLlwiKTtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAvL2Vsc2VcbiAgICAgICAgIC8vIHRoaXMuYWxlcnQoXCJFcnJvciB0cnkgYWdhaW4gb3IgY29udGFjdCBhZG1pbmlzdHJhdG9yLlwiKTtcblxuXG4gIH1cblxuICBleGl0KCl7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG5cbiAgdmlldygpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2N1c3RvbWVyc1wiXSk7XG4gIH1cblxuICBjbGVhcigpe1xuICAgICAgdGhpcy5vcmRlci5wcm9kdWN0X25hbWU9Jyc7XG4gICAgICB0aGlzLm9yZGVyLnNpemUgPScnO1xuICAgICAgdGhpcy5vcmRlci5xdWFudGl0eT0nJztcbiAgICAgIHRoaXMub3JkZXIuY3VzdG9tZXJfbmFtZT0nJztcbiAgICAgIHRoaXMub3JkZXIuY3VzdG9tZXJfbG9jYXRpb249Jyc7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlZJUlRVQUwgU0hPUFwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTYWxlc01vZHVsZSB7IH1cbiJdfQ==