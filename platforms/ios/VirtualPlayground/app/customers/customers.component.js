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
                console.log(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFDMUUsdURBQW1EO0FBRW5ELG1FQUErQztBQVMvQztJQUlFLDRCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUUsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQUUsUUFBUSxFQUFDLEdBQUcsRUFBQztZQUNySCxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFDLG1CQUFtQixFQUFFLFFBQVEsRUFBQyxHQUFHLEVBQUM7WUFDMUcsRUFBRSxZQUFZLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBQyxtQkFBbUIsRUFBRSxRQUFRLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUUvRyxJQUFJLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFDLGdDQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLFFBQVE7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUs7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkIsQ0FBQyxDQUFDLENBQUM7WUFFSix5QkFBeUI7UUFDNUIsQ0FBQyxFQUFFLGlCQUFpQixLQUFLO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEIsQ0FBQyxFQUFFO1lBQ0MsOENBQThDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVELHNDQUFTLEdBQVQ7SUFDQSxDQUFDO0lBRUQscUNBQVEsR0FBUixjQUFhLENBQUM7SUE5Qkgsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQU1xQyxrQ0FBZTtPQUp6QyxrQkFBa0IsQ0ErQjlCO0lBQUQseUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSxnREFBa0I7QUFnQy9CO0lBQUE7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0N1c3RvbWVyU2VydmljZX0gZnJvbSBcIi4vY3VzdG9tZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vc2hhcmVkL29yZGVyLm1vZGVsXCI7XG5pbXBvcnQge0tpbnZleX0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzQ29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICBvcmRlcnM6IEFycmF5PE9yZGVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1c3RvbWVyU2VydmljZTogQ3VzdG9tZXJTZXJ2aWNlKSB7XG4gICAgIHRoaXMub3JkZXJzID0gW3sgcHJvZHVjdF9uYW1lOidUZXN0JywgY3VzdG9tZXJfbmFtZTonVGVzdCcsc2l6ZTonMScsIGN1c3RvbWVyX2xvY2F0aW9uOidNZGF2dWxhIHN0YW5kIDMwNScsIHF1YW50aXR5OicyJ30sXG4gICAgICAgICB7IHByb2R1Y3RfbmFtZTonVGVzdCcsIGN1c3RvbWVyX25hbWU6J1Rlc3QnLHNpemU6JzEnLCBjdXN0b21lcl9sb2NhdGlvbjonTWRhdnVsYSBzdGFuZCAzMDUnLCBxdWFudGl0eTonMid9LFxuICAgICAgICAgeyBwcm9kdWN0X25hbWU6J1Rlc3QnLCBjdXN0b21lcl9uYW1lOidUZXN0JyxzaXplOicxJywgY3VzdG9tZXJfbG9jYXRpb246J01kYXZ1bGEgc3RhbmQgMzA1JywgcXVhbnRpdHk6JzInfV07XG5cbiAgICAgIGxldCBkYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb24oJ29yZGVyJyxLaW52ZXkuRGF0YVN0b3JlVHlwZS5DYWNoZSk7XG4gICAgICBkYXRhU3RvcmUuZmluZCgpLnN1YnNjcmliZShmdW5jdGlvbiBvbk5leHQoZW50aXRpZXMpIHtcbiAgICAgICAgICBlbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIyMjJyk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcblxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAvLyBvcmRlcnMucHVzaChlbnRpdGllcyk7XG4gICAgICB9LCBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9LCBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0ZpbmlzaGVkIHB1bGxpbmcgb3JkZXJzIGRhdGEnKTtcbiAgICAgIH0pO1xuXG5cbiAgfVxuXG4gIGVkaXRPcmRlcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG59XG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzTW9kdWxlIHsgfVxuXG4iXX0=