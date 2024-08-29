var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../../common/treeGridParameterTypeEditorBase"], function (require, exports, treeGridParameterTypeEditorBase_1) {
    "use strict";
    var TraceConfigTriggerTreeGridCellEditTemplate_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceConfigTriggerTreeGridCellEditTemplate = void 0;
    let TraceConfigTriggerTreeGridCellEditTemplate = TraceConfigTriggerTreeGridCellEditTemplate_1 = class TraceConfigTriggerTreeGridCellEditTemplate extends treeGridParameterTypeEditorBase_1.TreeGridParameterTypeEditorBase {
        constructor() {
            super(...arguments);
            /**
             * handle creating the cell edit template
             *
             * @returns
             * @memberof TraceConfigTriggerTreeGridCellEditTemplate
             */
            this.create = () => { return this.getEditInputTemplate(); };
            /**
             * handles reading parameter values
             *
             * @param {*} args
             * @memberof TraceConfigTriggerTreeGridCellEditTemplate
             */
            this.read = (args) => { return this.endCellEdit(args); };
            /**
             * handles writing parameter values
             *
             * @param {*} args
             * @memberof TraceConfigTriggerTreeGridCellEditTemplate
             */
            this.write = (args) => {
                let triggerParameter = args.rowdata;
                let cellInfo = { values: triggerParameter.values, dataTypeName: triggerParameter.dataTypeName, onlyValuesFromListAreAllowed: true };
                return this.beginCellEdit(args, triggerParameter.displayValue, cellInfo);
            };
        }
        /**
         * creates an instance
         *
         * @static
         * @returns {*}
         * @memberof TraceConfigTriggerTreeGridCellEditTemplate
         */
        static createInstance() {
            return new TraceConfigTriggerTreeGridCellEditTemplate_1();
        }
    };
    TraceConfigTriggerTreeGridCellEditTemplate = TraceConfigTriggerTreeGridCellEditTemplate_1 = __decorate([
        mco.role()
    ], TraceConfigTriggerTreeGridCellEditTemplate);
    exports.TraceConfigTriggerTreeGridCellEditTemplate = TraceConfigTriggerTreeGridCellEditTemplate;
});
