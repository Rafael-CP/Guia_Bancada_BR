var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SquaredSum = void 0;
    let SquaredSum = class SquaredSum {
        constructor() {
            this._data = [];
        }
        set data(data) {
            if (data instanceof Array) {
                this._data = data;
            }
            else {
                this._data.push(data);
            }
        }
        get data() {
            return this._data;
        }
        calculate() {
            let sum = 0;
            for (var i = 0; i < this._data.length; i++) {
                sum += Math.pow(this._data[i], 2);
            }
            return sum;
        }
    };
    SquaredSum = __decorate([
        mco.role()
    ], SquaredSum);
    exports.SquaredSum = SquaredSum;
});