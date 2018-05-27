"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var order_model_1 = require("./order.model");
var OrderService = (function () {
    function OrderService(zone) {
        this.zone = zone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.allItems = [];
        this.dataStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection('order');
    }
    OrderService.prototype.load = function () {
        var _this = this;
        return Promise.resolve().then(function () {
            var stream = _this.dataStore.find();
            console.log('service');
            return _this.allItems;
        }).then(function (data) {
            _this.allItems = [];
            data.forEach(function (order) {
                _this.allItems.push(new order_model_1.Order(order._id, order.product_name, order.size, order.quantity, order.customer_name, order.customer_location, order.done || false, order.deleted || false));
            });
        }).catch(function (error) {
        });
    };
    OrderService.prototype.add = function (product_name, size, quantity, customer_name, customer_location) {
        var _this = this;
        return this.dataStore.save({ product_name: product_name, size: size, quantity: quantity, customer_name: customer_name, customer_location: customer_location })
            .then(function (data) {
            _this.allItems.unshift(new order_model_1.Order(data._id, product_name, size, quantity, customer_name, customer_location, false, false));
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    OrderService.prototype.publishUpdates = function () {
        var _this = this;
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(function () {
            // must emit a *new* value (immutability!)
            var newVal = _this.allItems.slice();
            _this.items.next(newVal);
        });
    };
    OrderService.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsOENBQTZDO0FBQzdDLHdEQUF1RDtBQUN2RCxtRUFBK0M7QUFDL0MsNkNBQXNDO0FBR3RDO0lBS0ksc0JBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBSmhDLFVBQUssR0FBa0MsSUFBSSxpQ0FBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQVEsT0FBTyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVyQywyQkFBSSxHQUFKO1FBQUEsaUJBdUJDO1FBdEJHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1QsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2QsSUFBSSxtQkFBSyxDQUNMLEtBQUssQ0FBQyxHQUFHLEVBQ1QsS0FBSyxDQUFDLFlBQVksRUFDbEIsS0FBSyxDQUFDLElBQUksRUFDVixLQUFLLENBQUMsUUFBUSxFQUNkLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxpQkFBaUIsRUFDdkIsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQ25CLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUN6QixDQUNKLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBRyxHQUFILFVBQUksWUFBb0IsRUFBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxhQUFxQixFQUFFLGlCQUF5QjtRQUF6RyxpQkFRQztRQVBHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQzthQUNuSixJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxtQkFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGlCQUFpQixFQUNoRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8scUNBQWMsR0FBdEI7UUFBQSxpQkFPQztRQU5HLG9HQUFvRztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLDBDQUEwQztZQUMxQyxJQUFNLE1BQU0sR0FBTyxLQUFJLENBQUMsUUFBUSxRQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sbUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdERRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FNaUIsYUFBTTtPQUx2QixZQUFZLENBdUR4QjtJQUFELG1CQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCB7S2ludmV5fSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4vb3JkZXIubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSB7XG4gICAgaXRlbXM6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPcmRlcj4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxPcmRlcj4+KFtdKTtcbiAgICBwcml2YXRlIGFsbEl0ZW1zOiBBcnJheTxPcmRlcj4gPSBbXTtcbiAgICBwcml2YXRlIGRhdGFTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbjxPcmRlcj4oJ29yZGVyJyk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gdGhpcy5kYXRhU3RvcmUuZmluZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2UnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbEl0ZW1zO1xuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbEl0ZW1zID0gW107XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxJdGVtcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgT3JkZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5wcm9kdWN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIucXVhbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5jdXN0b21lcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuY3VzdG9tZXJfbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5kb25lIHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZGVsZXRlZCB8fCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKHByb2R1Y3RfbmFtZTogc3RyaW5nLHNpemU6IG51bWJlciwgcXVhbnRpdHk6IHN0cmluZywgY3VzdG9tZXJfbmFtZTogc3RyaW5nLCBjdXN0b21lcl9sb2NhdGlvbjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTdG9yZS5zYXZlKHsgcHJvZHVjdF9uYW1lOiBwcm9kdWN0X25hbWUsc2l6ZTpzaXplICxxdWFudGl0eTpxdWFudGl0eSwgY3VzdG9tZXJfbmFtZTpjdXN0b21lcl9uYW1lLCBjdXN0b21lcl9sb2NhdGlvbjpjdXN0b21lcl9sb2NhdGlvbn0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsSXRlbXMudW5zaGlmdChuZXcgT3JkZXIoZGF0YS5faWQsIHByb2R1Y3RfbmFtZSxzaXplLHF1YW50aXR5LGN1c3RvbWVyX25hbWUsY3VzdG9tZXJfbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVibGlzaFVwZGF0ZXMoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdXBkYXRlcyBhcmUgcHVibGlzaGVkIGluc2lkZSBOZ1pvbmUgc28gdGhhdCBjaGFuZ2UgZGV0ZWN0aW9uIGlzIHRyaWdnZXJlZCBpZiBuZWVkZWRcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAvLyBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IFsuLi50aGlzLmFsbEl0ZW1zXTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubmV4dChuZXdWYWwpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxufVxuXG5cbiJdfQ==