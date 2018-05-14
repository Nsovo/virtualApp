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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFEQUE4QztBQUM5QyxtRUFBaUQ7QUFDakQsdURBQW9EO0FBQ3BELDBDQUF5QztBQUN6QyxJQUFNLFNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFVdkQ7SUFFRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCwrQkFBTSxHQUFOO1FBRUksSUFBTSxXQUFXLEdBQUcsSUFBSSxtQkFBSyxFQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDckIsV0FBVyxDQUFDLFlBQVksR0FBRSxNQUFNLENBQUM7UUFJakMsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ2hFLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDbkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLGlCQUFpQixLQUFLO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFHSixZQUFZO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixNQUFNO1FBQ0gsMkRBQTJEO0lBR2xFLENBQUM7SUFDRCw2QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFFLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLE9BQWU7UUFDZixNQUFNLENBQUMsZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLFVBQVU7WUFDakIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9DUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUc0QixlQUFNO09BRnZCLGNBQWMsQ0FpRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSx3Q0FBYztBQWtEM0I7SUFBQTtJQUEyQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tIFwiLi4vc2hhcmVkL29yZGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBLaW52ZXkgfSBmcm9tICdraW52ZXktbmF0aXZlc2NyaXB0LXNkayc7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmNvbnN0IGRhdGFTdG9yZSA9IEtpbnZleS5EYXRhU3RvcmUuY29sbGVjdGlvbignb3JkZXInKTtcblxuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1zYWxlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zYWxlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NhbGVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTYWxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9yZGVyOk9yZGVyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5vcmRlciA9IG5ldyBPcmRlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBzdWJtaXQoKSB7XG5cbiAgICAgIGNvbnN0IGVudGl0eU9yZGVyID0gbmV3IE9yZGVyKCk7XG4gICAgICBlbnRpdHlPcmRlci5zaXplPScxJztcbiAgICAgIGVudGl0eU9yZGVyLnByb2R1Y3RfbmFtZSA9J3Rlc3QnO1xuXG5cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBkYXRhU3RvcmUuc2F2ZShlbnRpdHlPcmRlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH0pO1xuXG5cbiAgICAgLy8gaWYodHJ1ZSApXG4gICAgICAgICAgdGhpcy5hbGVydChcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzYXZlLlwiKTtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAvL2Vsc2VcbiAgICAgICAgIC8vIHRoaXMuYWxlcnQoXCJFcnJvciB0cnkgYWdhaW4gb3IgY29udGFjdCBhZG1pbmlzdHJhdG9yLlwiKTtcblxuXG4gIH1cbiAgZXhpdCgpe1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxuXG4gIGNsZWFyKCl7XG4gICAgICB0aGlzLm9yZGVyLnByb2R1Y3RfbmFtZT0nJztcbiAgICAgIHRoaXMub3JkZXIuc2l6ZSA9Jyc7XG4gIH1cblxuICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFQUCBOQU1FXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5leHBvcnQgY2xhc3MgU2FsZXNNb2R1bGUgeyB9XG4iXX0=