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
        var promise = Promise.resolve();
        return promise.then(function () {
            var stream = _this.dataStore.find();
            return stream.toPromise();
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
        return this.dataStore.save({ name: name })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFDbkQsOENBQTZDO0FBQzdDLHdEQUF1RDtBQUN2RCxtRUFBK0M7QUFDL0MsNkNBQXNDO0FBR3RDO0lBS0ksc0JBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBSmhDLFVBQUssR0FBa0MsSUFBSSxpQ0FBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLGFBQVEsR0FBaUIsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQVEsT0FBTyxDQUFDLENBQUM7SUFFNUIsQ0FBQztJQUVyQywyQkFBSSxHQUFKO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNkLElBQUksbUJBQUssQ0FDTCxLQUFLLENBQUMsR0FBRyxFQUNULEtBQUssQ0FBQyxZQUFZLEVBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQ1YsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsaUJBQWlCLEVBQ3ZCLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUNuQixLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FDekIsQ0FDSixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQUcsR0FBSCxVQUFJLFlBQW9CLEVBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsYUFBcUIsRUFBRSxpQkFBeUI7UUFBekcsaUJBUUM7UUFQRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDckMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxpQkFBaUIsRUFDaEcsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLHFDQUFjLEdBQXRCO1FBQUEsaUJBT0M7UUFORyxvR0FBb0c7UUFDcEcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDViwwQ0FBMEM7WUFDMUMsSUFBTSxNQUFNLEdBQU8sS0FBSSxDQUFDLFFBQVEsUUFBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLEtBQWU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXREUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBTWlCLGFBQU07T0FMdkIsWUFBWSxDQXVEeEI7SUFBRCxtQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQge0tpbnZleX0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gXCIuL29yZGVyLm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlclNlcnZpY2Uge1xuICAgIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T3JkZXI+PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8T3JkZXI+PihbXSk7XG4gICAgcHJpdmF0ZSBhbGxJdGVtczogQXJyYXk8T3JkZXI+ID0gW107XG4gICAgcHJpdmF0ZSBkYXRhU3RvcmUgPSBLaW52ZXkuRGF0YVN0b3JlLmNvbGxlY3Rpb248T3JkZXI+KCdvcmRlcicpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RyZWFtID0gdGhpcy5kYXRhU3RvcmUuZmluZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0cmVhbS50b1Byb21pc2UoKTtcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbGxJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChvcmRlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsSXRlbXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IE9yZGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIucHJvZHVjdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLnF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuY3VzdG9tZXJfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmN1c3RvbWVyX2xvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZG9uZSB8fCBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmRlbGV0ZWQgfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZChwcm9kdWN0X25hbWU6IHN0cmluZyxzaXplOiBudW1iZXIsIHF1YW50aXR5OiBzdHJpbmcsIGN1c3RvbWVyX25hbWU6IHN0cmluZywgY3VzdG9tZXJfbG9jYXRpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmUuc2F2ZSh7IG5hbWU6IG5hbWUgfSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxJdGVtcy51bnNoaWZ0KG5ldyBPcmRlcihkYXRhLl9pZCwgcHJvZHVjdF9uYW1lLHNpemUscXVhbnRpdHksY3VzdG9tZXJfbmFtZSxjdXN0b21lcl9sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdWJsaXNoVXBkYXRlcygpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGFsbCB1cGRhdGVzIGFyZSBwdWJsaXNoZWQgaW5zaWRlIE5nWm9uZSBzbyB0aGF0IGNoYW5nZSBkZXRlY3Rpb24gaXMgdHJpZ2dlcmVkIGlmIG5lZWRlZFxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gWy4uLnRoaXMuYWxsSXRlbXNdO1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5uZXh0KG5ld1ZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICB9XG59XG5cblxuIl19