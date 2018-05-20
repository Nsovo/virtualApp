"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_service_1 = require("./customer.service");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var CustomersComponent = (function () {
    function CustomersComponent(customerService) {
        this.customerService = customerService;
        this.orders = [{ product_name: 'Test', customer_name: 'Test', size: '1', customer_location: 'Mdavula stand 305', quantity: '2' },
            { product_name: 'Test', customer_name: 'Test', size: '1', customer_location: 'Mdavula stand 305', quantity: '2' },
            { product_name: 'Test', customer_name: 'Test', size: '1', customer_location: 'Mdavula stand 305', quantity: '2' }];
        var dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('order', kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache);
        dataStore.find().subscribe(function onNext(entities) {
            entities.forEach(function (value) {
                console.log('######');
                console.log(value.customer_name);
            });
            // orders.push(entities);
        }, function onError(error) {
            console.log(error);
        }, function onComplete() {
            //console.log('Finished pulling orders data');
        });
    }
    CustomersComponent.prototype.editOrder = function () {
    };
    CustomersComponent.prototype.ngOnInit = function () { };
    CustomersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-customers',
            templateUrl: './customers.component.html',
            styleUrls: ['./customers.component.scss'],
        }),
        __metadata("design:paramtypes", [customer_service_1.CustomerService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFDMUUsdURBQW1EO0FBRW5ELG1FQUErQztBQVMvQztJQUlFLDRCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFDLEdBQUcsRUFBQztZQUNySCxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFDLG1CQUFtQixFQUFFLFFBQVEsRUFBQyxHQUFHLEVBQUM7WUFDMUcsRUFBRSxZQUFZLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBQyxtQkFBbUIsRUFBRSxRQUFRLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUUvRyxJQUFJLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLGdDQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLFFBQVE7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUs7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXJDLENBQUMsQ0FBQyxDQUFDO1lBRUoseUJBQXlCO1FBQzVCLENBQUMsRUFBRSxpQkFBaUIsS0FBSztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLENBQUMsRUFBRTtZQUNDLDhDQUE4QztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFFRCxzQ0FBUyxHQUFUO0lBQ0EsQ0FBQztJQUVELHFDQUFRLEdBQVIsY0FBYSxDQUFDO0lBOUJILGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNcUMsa0NBQWU7T0FKekMsa0JBQWtCLENBK0I5QjtJQUFELHlCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksZ0RBQWtCO0FBZ0MvQjtJQUFBO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDdXN0b21lclNlcnZpY2V9IGZyb20gXCIuL2N1c3RvbWVyLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5tb2RlbFwiO1xuaW1wb3J0IHtLaW52ZXl9IGZyb20gXCJraW52ZXktbmF0aXZlc2NyaXB0LXNka1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyc0NvbXBvbmVudFxuICAgIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgb3JkZXJzOiBBcnJheTxPcmRlcj47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXN0b21lclNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSkge1xuICAgICB0aGlzLm9yZGVycyA9IFt7IHByb2R1Y3RfbmFtZTonVGVzdCcsIGN1c3RvbWVyX25hbWU6J1Rlc3QnLHNpemU6JzEnLCBjdXN0b21lcl9sb2NhdGlvbjonTWRhdnVsYSBzdGFuZCAzMDUnLCBxdWFudGl0eTonMid9LFxuICAgICAgICAgeyBwcm9kdWN0X25hbWU6J1Rlc3QnLCBjdXN0b21lcl9uYW1lOidUZXN0JyxzaXplOicxJywgY3VzdG9tZXJfbG9jYXRpb246J01kYXZ1bGEgc3RhbmQgMzA1JywgcXVhbnRpdHk6JzInfSxcbiAgICAgICAgIHsgcHJvZHVjdF9uYW1lOidUZXN0JywgY3VzdG9tZXJfbmFtZTonVGVzdCcsc2l6ZTonMScsIGN1c3RvbWVyX2xvY2F0aW9uOidNZGF2dWxhIHN0YW5kIDMwNScsIHF1YW50aXR5OicyJ31dO1xuXG4gICAgICBsZXQgZGF0YVN0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCdvcmRlcicsS2ludmV5LkRhdGFTdG9yZVR5cGUuQ2FjaGUpO1xuICAgICAgZGF0YVN0b3JlLmZpbmQoKS5zdWJzY3JpYmUoZnVuY3Rpb24gb25OZXh0KGVudGl0aWVzKSB7XG4gICAgICAgICAgZW50aXRpZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJyMjIyMjIycpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5jdXN0b21lcl9uYW1lKTtcblxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAvLyBvcmRlcnMucHVzaChlbnRpdGllcyk7XG4gICAgICB9LCBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9LCBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbmlzaGVkIHB1bGxpbmcgb3JkZXJzIGRhdGEnKTtcbiAgICAgIH0pO1xuXG5cbiAgfVxuXG4gIGVkaXRPcmRlcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzTW9kdWxlIHsgfVxuXG4iXX0=