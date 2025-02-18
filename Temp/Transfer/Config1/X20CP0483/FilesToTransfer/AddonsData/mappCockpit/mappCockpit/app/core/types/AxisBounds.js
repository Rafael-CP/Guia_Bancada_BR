var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AxisBounds = void 0;
    let AxisBounds = class AxisBounds {
        constructor(axis, x, y, width, height) {
            this.axis = axis;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
    };
    AxisBounds = __decorate([
        mco.role()
    ], AxisBounds);
    exports.AxisBounds = AxisBounds;
});
