"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmpstyleComponent = /** @class */ (function () {
    function EmpstyleComponent() {
        this.classesToApply = 'italicClass'; // we can apply class to html element like this
        this.applyBoldClass = true; //is apply to boldClass set to false , boldClass will not apply to element
        this.applyItalicClass = true;
        this.isBold = true;
        this.fontSize = 20;
        this.isItalic = true;
    }
    EmpstyleComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    EmpstyleComponent.prototype.addStyle = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'sont-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    };
    EmpstyleComponent.prototype.onclick = function () {
        console.log('button clicked');
    };
    EmpstyleComponent = __decorate([
        core_1.Component({
            selector: 'my-style',
            templateUrl: 'app/empstyle/empstyle.component.html',
        })
    ], EmpstyleComponent);
    return EmpstyleComponent;
}());
exports.EmpstyleComponent = EmpstyleComponent;
//# sourceMappingURL=empstyle.component.js.map