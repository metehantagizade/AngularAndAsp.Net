import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employeeList/employeeCount.component.html',
    styleUrls: ['app/employeeList/employeeCount.component.css']
})

export class EmployeeCountComponent {
    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()  // use it to fetch data from parent ts
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
        console.log(this.selectedRadioButtonValue);
    }
}