import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                        <h1>{{pageHeader ? pageHeader : 'No Header'}}</h1>
                        <h1>{{getFullName()}}</h1>
                        <img src='{{imagePath}}' style='width:10%;height=10%;'/>
                        <img [src]='imagePath' style='width:10%;height=10%;'/>
                        <my-employee>Employee Detail</my-employee>
                        <button [disabled]='isDisabled'>property binding</button>
                        <button disabled='{{isDisabled}}'>interPolation</button><!--is not work correctly on non-string data value-->
                  </div>` ,
})
export class AppComponent  {
    pageHeader: string = null;
    isDisabled: boolean = false;
    imagePath: string = 'https://avatars1.githubusercontent.com/u/34881715?s=460&v=4'

    firstName: string = "Tohid";
    lastName: string = "Taghizad";

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
