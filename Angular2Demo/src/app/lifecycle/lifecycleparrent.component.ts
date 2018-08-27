import { Component, Input } from '@angular/core';

@Component({
    selector: 'lifecycle-parent',
    templateUrl:'./lifecycleparent.component.html' 
})
export class LifecycleParentComponent {
    userText: string = 'Tohid';
}