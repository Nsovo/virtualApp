"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemStatusPipe = (function () {
    function ItemStatusPipe() {
    }
    ItemStatusPipe.prototype.transform = function (items, deleted) {
        var itemsToShow = [];
        if (items && Array.isArray(items)) {
            itemsToShow = items.filter(function (order) {
                return order.deleted === deleted;
            });
        }
        return itemsToShow;
    };
    ItemStatusPipe = __decorate([
        core_1.Pipe({
            name: "itemStatus"
        })
    ], ItemStatusPipe);
    return ItemStatusPipe;
}());
exports.ItemStatusPipe = ItemStatusPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdGF0dXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tc3RhdHVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFPcEQ7SUFBQTtJQVVBLENBQUM7SUFURyxrQ0FBUyxHQUFULFVBQVUsS0FBbUIsRUFBRSxPQUFnQjtRQUMzQyxJQUFJLFdBQVcsR0FBWSxFQUFFLENBQUM7UUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBWTtnQkFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQVRRLGNBQWM7UUFIMUIsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQztPQUNXLGNBQWMsQ0FVMUI7SUFBRCxxQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9yZGVyIH0gZnJvbSBcIi4uL3NoYXJlZC9vcmRlci5tb2RlbFwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogXCJpdGVtU3RhdHVzXCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVN0YXR1c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oaXRlbXM6IEFycmF5PE9yZGVyPiwgZGVsZXRlZDogYm9vbGVhbikge1xuICAgICAgICBsZXQgaXRlbXNUb1Nob3c6IE9yZGVyW10gPSBbXTtcbiAgICAgICAgaWYgKGl0ZW1zICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtc1RvU2hvdyA9IGl0ZW1zLmZpbHRlcigob3JkZXI6IE9yZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZGVyLmRlbGV0ZWQgPT09IGRlbGV0ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbXNUb1Nob3c7XG4gICAgfVxufSJdfQ==