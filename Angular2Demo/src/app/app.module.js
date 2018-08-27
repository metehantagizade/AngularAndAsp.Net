"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var empstyle_component_1 = require("./empstyle/empstyle.component");
var binding_component_1 = require("./binding/binding.component");
var employeeList_component_1 = require("./employeeList/employeeList.component");
var employeeTitle_pipe_1 = require("./employeeList/employeeTitle.pipe");
var employeeCount_component_1 = require("./employeeList/employeeCount.component");
var lifecycleparrent_component_1 = require("./lifecycle/lifecycleparrent.component");
var lifecycle_component_1 = require("./lifecycle/lifecycle.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, empstyle_component_1.EmpstyleComponent, binding_component_1.BindingComponent, employeeList_component_1.EmployeeListComponent,
                employeeTitle_pipe_1.EmployeeTitlePipe, employeeCount_component_1.EmployeeCountComponent, lifecycleparrent_component_1.LifecycleParentComponent, lifecycle_component_1.LifecycleComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map