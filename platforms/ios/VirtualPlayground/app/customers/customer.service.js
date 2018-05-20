"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var CustomerService = (function () {
    function CustomerService() {
    }
    CustomerService.prototype.getOrders = function () {
        var orders = [];
        var dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('order', kinvey_nativescript_sdk_1.Kinvey.DataStoreType.Cache);
        var query = new kinvey_nativescript_sdk_1.Kinvey.Query();
        var orderData = dataStore.find().subscribe(function onNext(entities) {
            orders.push(entities);
        }, function onError(error) {
            console.log(error);
        }, function onComplete() {
            console.log('Finished pulling orders data');
        });
        return orders;
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsbUVBQStDO0FBRy9DO0lBQ0k7SUFBZ0IsQ0FBQztJQUNqQixtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksU0FBUyxHQUNQLGdDQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUMsZ0NBQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR2xDLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLFFBQVE7WUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsaUJBQWlCLEtBQUs7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0QixDQUFDLEVBQUU7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFuQlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0FvQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S2ludmV5fSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBnZXRPcmRlcnMoICkge1xuICAgICAgICBsZXQgb3JkZXJzID0gW107XG4gICAgICAgIGxldCBkYXRhU3RvcmVcbiAgICAgICAgICAgID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uKCdvcmRlcicsS2ludmV5LkRhdGFTdG9yZVR5cGUuQ2FjaGUpO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IEtpbnZleS5RdWVyeSgpO1xuXG5cbiAgICAgICB2YXIgb3JkZXJEYXRhID0gZGF0YVN0b3JlLmZpbmQoKS5zdWJzY3JpYmUoZnVuY3Rpb24gb25OZXh0KGVudGl0aWVzKSB7XG4gICAgICAgICAgICBvcmRlcnMucHVzaChlbnRpdGllcyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9LCBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpbmlzaGVkIHB1bGxpbmcgb3JkZXJzIGRhdGEnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9yZGVycztcbiAgICB9XG59XG5cblxuIl19