"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var customers_routing_module_1 = require("./customers-routing.module");
var customers_component_1 = require("./customers.component");
var item_status_pipe_1 = require("./item-status.pipe");
var CustomersModule = (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                customers_routing_module_1.CustomersRoutingModule
            ],
            declarations: [
                customers_component_1.CustomersComponent,
                item_status_pipe_1.ItemStatusPipe
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUVyRSx1RUFBb0U7QUFDcEUsNkRBQTJEO0FBQzNELHVEQUFtRDtBQWdCbkQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFkM0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0JBQXVCO2dCQUN2QixpREFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysd0NBQWtCO2dCQUNsQixpQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEN1c3RvbWVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jdXN0b21lcnMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbWVyc0NvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbWVycy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1TdGF0dXNQaXBlIH0gZnJvbSAnLi9pdGVtLXN0YXR1cy5waXBlJ1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQ3VzdG9tZXJzUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEN1c3RvbWVyc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbVN0YXR1c1BpcGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJzTW9kdWxlIHsgfVxuIl19