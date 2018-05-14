"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_model_1 = require("../shared/order.model");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('order');
var SalesComponent = (function () {
    function SalesComponent() {
        this.order = new order_model_1.Order();
    }
    SalesComponent.prototype.ngOnInit = function () { };
    SalesComponent.prototype.submit = function () {
        this.order.product_name = 'Test';
        this.order.customer_location = 'Test';
        this.order.customer_name = 'Test';
        this.order.quantity = 'Test';
        this.order.size = 'Test';
        var promise = dataStore.save({
            _id: '1',
            field: 'value'
        }).then(function onSuccess(entity) {
            return entity;
            // ...
        }).catch(function onError(error) {
            return error;
        });
        console.log('HERE PROMISE *********************');
        console.log(JSON.stringify(promise.then()));
    };
    SalesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-sales',
            templateUrl: './sales.component.html',
            styleUrls: ['./sales.component.css']
        }),
        __metadata("design:paramtypes", [])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUE4QztBQUM5QyxtRUFBaUQ7QUFDakQsSUFBTSxTQUFTLEdBQUcsZ0NBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBU3ZEO0lBRUU7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksbUJBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFFLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFFekIsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU07WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNkLE1BQU07UUFDVixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEtBQUs7WUFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBM0JVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7O09BQ1csY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjO0FBK0IzQjtJQUFBO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuLi9zaGFyZWQvb3JkZXIubW9kZWxcIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmNvbnN0IGRhdGFTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbignb3JkZXInKTtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtc2FsZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FsZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zYWxlcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2FsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBvcmRlcjpPcmRlcjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5vcmRlciA9IG5ldyBPcmRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG4gICAgICB0aGlzLm9yZGVyLnByb2R1Y3RfbmFtZSA9ICdUZXN0JztcbiAgICAgIHRoaXMub3JkZXIuY3VzdG9tZXJfbG9jYXRpb24gPSAnVGVzdCc7XG4gICAgICB0aGlzLm9yZGVyLmN1c3RvbWVyX25hbWUgPSAnVGVzdCc7XG4gICAgICB0aGlzLm9yZGVyLnF1YW50aXR5PSAnVGVzdCc7XG4gICAgICB0aGlzLm9yZGVyLnNpemUgPSAnVGVzdCc7XG5cbiAgICAgIGNvbnN0IHByb21pc2UgPSBkYXRhU3RvcmUuc2F2ZSh7XG4gICAgICAgICAgX2lkOiAnMScsXG4gICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gb25TdWNjZXNzKGVudGl0eSkge1xuICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgICAgLy8gLi4uXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coJ0hFUkUgUFJPTUlTRSAqKioqKioqKioqKioqKioqKioqKionKTtcblxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvbWlzZS50aGVuKCkpKVxuICB9XG5cblxufVxuZXhwb3J0IGNsYXNzIFNhbGVzTW9kdWxlIHsgfVxuIl19