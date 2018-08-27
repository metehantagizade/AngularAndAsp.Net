import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpstyleComponent } from './empstyle/empstyle.component'
import { BindingComponent } from './binding/binding.component'
import { EmployeeListComponent } from './employeeList/employeeList.component'
import { EmployeeTitlePipe } from './employeeList/employeeTitle.pipe'
import { EmployeeCountComponent } from './employeeList/employeeCount.component'
import { LifecycleParentComponent } from './lifecycle/lifecycleparrent.component'
import { LifecycleComponent } from './lifecycle/lifecycle.component'

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmpstyleComponent, BindingComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent, LifecycleParentComponent, LifecycleComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
