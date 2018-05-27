"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = (function () {
    function Order(_id, product_name, size, quantity, customer_name, customer_location, done, deleted) {
        this._id = _id;
        this.product_name = product_name;
        this.size = size;
        this.quantity = quantity;
        this.customer_name = customer_name;
        this.customer_location = customer_location;
        this.done = done;
        this.deleted = deleted;
    }
    return Order;
}());
exports.Order = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvcmRlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBQ0ksZUFDTyxHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLGFBQXFCLEVBQ3JCLGlCQUF5QixFQUN6QixJQUFhLEVBQ2IsT0FBZ0I7UUFQaEIsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUTtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUNyQixDQUFDO0lBQ1AsWUFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcblxuZXhwb3J0IGNsYXNzIE9yZGVyICBpbXBsZW1lbnRzIEtpbnZleS5FbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfaWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcHJvZHVjdF9uYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIHNpemU6IG51bWJlcixcbiAgICBwdWJsaWMgcXVhbnRpdHk6IHN0cmluZyxcbiAgICBwdWJsaWMgY3VzdG9tZXJfbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBjdXN0b21lcl9sb2NhdGlvbjogc3RyaW5nLFxuICAgIHB1YmxpYyBkb25lOiBib29sZWFuLFxuICAgIHB1YmxpYyBkZWxldGVkOiBib29sZWFuXG4gICApIHt9XG59Il19