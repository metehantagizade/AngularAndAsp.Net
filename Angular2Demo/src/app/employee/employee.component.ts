import { Component } from "@angular/core"

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})

export class EmployeeComponent {
    firstName: string = "Tohid";
    lastName: string = "Taghizad";
    gender: string = "Male";
    age: number = 30;
}