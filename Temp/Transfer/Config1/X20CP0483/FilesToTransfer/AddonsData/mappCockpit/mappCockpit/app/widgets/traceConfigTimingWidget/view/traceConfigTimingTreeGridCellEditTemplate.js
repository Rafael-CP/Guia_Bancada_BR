var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../../common/treeGridParameterTypeEditorBase"], function (require, exports, treeGridParameterTypeEditorBase_1) {
    "use strict";
    var TraceConfigTimingTreeGridCellEditTemplate_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceConfigTimingTreeGridCellEditTemplate = void 0;
    let TraceConfigTimingTreeGridCellEditTemplate = TraceConfigTimingTreeGridCellEditTemplate_1 = class TraceConfigTimingTreeGridCellEditTemplate extends treeGridParameterTypeEditorBase_1.TreeGridParameterTypeEditorBase {
        constructor() {
            super(...arguments);
            /**
             * handle creating the cell edit template
             *
             * @returns
             * @memberof TraceConfigTimingTreeGridCellEditTemplate
             */
            this.create = () => { return this.getEditInputTemplate(); };
            /**
             * handles reading parameter values
             *
             * @param {*} args
             * @memberof TraceConfigTimingTreeGridCellEditTemplate
             */
            this.read = (args) => { return this.endCellEdit(args); };
            /**
             * handles writing parameter values
             *
             * @param {*} args
             * @memberof TraceConfigTimingTreeGridCellEditTemplate
             */
            this.write = (args) => {
                let componentParameter = args.rowdata.componentParameter;
                let values = undefined;
                if (componentParameter.enumType.values != undefined) {
                    values = componentParameter.enumType.values.map(value => value);
                }
                let cellInfo = { values: values, dataTypeName: componentParameter.dataType.name, onlyValuesFromListAreAllowed: true };
                return this.beginCellEdit(args, args.rowdata.displayValue, cellInfo);
            };
        }
        /**
         * creates an instance
         *
         * @static
         * @returns {*}
         * @memberof TraceConfigTimingTreeGridCellEditTemplate
         */
        static createInstance() {
            return new TraceConfigTimingTreeGridCellEditTemplate_1();
        }
    };
    TraceConfigTimingTreeGridCellEditTemplate = TraceConfigTimingTreeGridCellEditTemplate_1 = __decorate([
        mco.role()
    ], TraceConfigTimingTreeGridCellEditTemplate);
    exports.TraceConfigTimingTreeGridCellEditTemplate = TraceConfigTimingTreeGridCellEditTemplate;
});
