var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../../../framework/events"], function (require, exports, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let EventSerieDoubleClicked = class EventSerieDoubleClicked extends events_1.TypedEvent {
    };
    EventSerieDoubleClicked = __decorate([
        mco.role()
    ], EventSerieDoubleClicked);
    ;
    let EventChangeSize = class EventChangeSize extends events_1.TypedEvent {
    };
    EventChangeSize = __decorate([
        mco.role()
    ], EventChangeSize);
    ;
});
