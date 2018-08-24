"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = null;
        this.isDisabled = false;
        this.imagePath = 'https://avatars1.githubusercontent.com/u/34881715?s=460&v=4';
        this.firstName = "Tohid";
        this.lastName = "Taghizad";
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                        <h1>{{pageHeader ? pageHeader : 'No Header'}}</h1>\n                        <h1>{{getFullName()}}</h1>\n                        <img src='{{imagePath}}' style='width:10%;height=10%;'/>\n                        <img [src]='imagePath' style='width:10%;height=10%;'/>\n                        <my-employee>Employee Detail</my-employee>\n                        <button [disabled]='isDisabled'>property binding</button>\n                        <button disabled='{{isDisabled}}'>interPolation</button><!--is not work correctly on non-string data value-->\n                  </div>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map