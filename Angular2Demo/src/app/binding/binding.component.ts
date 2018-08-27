import { Component } from '@angular/core';

@Component({
    selector: 'binding-component',
    templateUrl: 'app/binding/binding.component.html',
})
export class BindingComponent {
    pageHeader: string = null;
    isDisabled: boolean = false;
    imagePath: string = 'https://avatars1.githubusercontent.com/u/34881715?s=460&v=4'


    firstName: string = "Tohid";
    lastName: string = "Taghizad";

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    name: string = "tohid";
}

