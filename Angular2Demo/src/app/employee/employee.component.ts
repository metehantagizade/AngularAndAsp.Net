import { Component } from "@angular/core"

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    columnSpan: number = 2;

    firstName: string = "Tohid";
    lastName: string = "Taghizad";
    gender: string = "Male";
    age: number = 30;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}