import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'lifecycle',
    template: `You entered: {{lifecycleInput}}`
})
export class LifecycleComponent implements OnChanges {
    @Input() lifecycleInput: string;

    //Every time the value of lifecycleInput is changed this method will be call
    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
        }
    }
}