import { Component } from '@angular/core';

@Component({
    selector: 'my-style',
    templateUrl: 'app/empstyle/empstyle.component.html',
})

export class EmpstyleComponent {
    classesToApply: string = 'italicClass'; // we can apply class to html element like this
    applyBoldClass: boolean = true; //is apply to boldClass set to false , boldClass will not apply to element
    applyItalicClass: boolean = true;

    addClasses() { // return class names thas has value of true
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        }
        return classes;
    }

    isBold: boolean = true;
    fontSize: number = 20;
    isItalic: boolean = true;

    addStyle(){
        let styles = {
            'font-size.px': this.fontSize,
            'sont-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        }
        return styles;
    }
    onclick(): void {
        console.log('button clicked');
    }
    
}