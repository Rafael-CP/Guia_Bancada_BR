var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "../../../framework/property", "./traceControl", "./traceConfig/traceConfigData", "./traceDataPoint", "../../online/mappCockpitComponentReflection", "../../../framework/componentHub/bindings/bindings", "../../../framework/componentHub/bindings/bindingDeclarations"], function (require, exports, property_1, traceControl_1, traceConfigData_1, traceDataPoint_1, mappCockpitComponentReflection_1, bindings_1, Binding) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappCockpitTraceComponent = void 0;
    /**
     * Provides data for describing a trace component
     *
     * @class MappCockpitTraceComponent
     */
    let MappCockpitTraceComponent = class MappCockpitTraceComponent {
        /**
         * Creates an instance of MappCockpitTraceComponent
         * @param {MappCockpitDiagnosticProvider} diagnosticProvider
         * @param {MappCockpitComponent} mappCockpitComponent
         * @memberof MappCockpitTraceComponent
         */
        constructor(diagnosticProvider, mappCockpitComponent) {
            this._initialized = false;
            this._diagnosticProvider = diagnosticProvider;
            this._mappCockpitComponent = mappCockpitComponent;
            this._traceControl = new traceControl_1.TraceControl(this._diagnosticProvider);
            this._availableTraceDataPoints = property_1.Property.create([]);
            this._traceConfigurationData = new traceConfigData_1.TraceConfigurationData(new Array(), new Array(), new Array());
            this.createComponentBindings();
            this.initialize();
        }
        /**
         * Creates the bindings to other components
         *
         * @private
         * @memberof MappCockpitTraceComponent
         */
        createComponentBindings() {
            bindings_1.Bindings.createByDecl(Binding.Traces.Configuration.DataPoints, this, "", "updateTraceDataPoints", false);
            bindings_1.Bindings.createByDecl(Binding.Traces.Configuration.StartTriggerInfos, this, "", "updateTraceStartTriggerInfo", false);
            bindings_1.Bindings.createByDecl(Binding.Traces.Configuration.TimingInfos, this, "", "updateTraceTimingParameters", false);
        }
        initialize() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this._initialized == true) {
                    return;
                }
                yield this.connectComponent();
                this._traceControl.initialize(this);
                this._traceConfigurationData = this.getTraceConfigurationData();
                this.updateParameterInterface();
                this._initialized = true;
            });
        }
        updateParameterInterface() {
            this.updateTraceTimingParameters(this._traceConfigurationData.timingParameters);
            this.updateTraceDataPoints(this._traceConfigurationData.dataPoints);
            this.updateTraceStartTriggerInfo(this._traceConfigurationData.startTriggers);
        }
        /**
         * Updates the trace start triggers
         *
         * @private
         * @param {TraceStartTrigger[]} startTriggers
         * @memberof MappCockpitTraceComponent
         */
        updateTraceStartTriggerInfo(startTriggers) {
            // BINDINGSOURCE: method stub to make the passed data bindable
        }
        /**
         * Updates the trace data points
         *
         * @private
         * @param {TraceDataPoint[]} dataPoints
         * @memberof MappCockpitTraceComponent
         */
        updateTraceDataPoints(dataPoints) {
            // BINDINGSOURCE: method stub to make the passed data bindable
        }
        /**
         * Updates the trace timing parameters.
         *
         * @private
         * @param {MappCockpitComponentParameter[]} timingParameters
         * @memberof MappCockpitTraceComponent
         */
        updateTraceTimingParameters(timingParameters) {
            // BINDINGSOURCE: method stub to make the passed data bindable
        }
        /**
         * Connects the trace component to the target and browses the methods,parameters
         *
         * @private
         * @memberof MappCockpitTraceComponent
         */
        connectComponent() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this._diagnosticProvider.browseParameters(this._mappCockpitComponent);
                yield this._diagnosticProvider.updateParameterDataTypes(this._mappCockpitComponent.parameters);
                yield this._diagnosticProvider.browseMethods(this._mappCockpitComponent);
                yield this._diagnosticProvider.browseMethodParameters(this._mappCockpitComponent.methods);
                yield this._diagnosticProvider.readParameterValues(this._mappCockpitComponent.parameters);
            });
        }
        /**
         * Returns the trace configuration data(datapoint names, timing parameter, start triggers)
         *
         * @private
         * @return {*}  {TraceConfigurationData}
         * @memberof MappCockpitTraceComponent
         */
        getTraceConfigurationData() {
            // get datapoints
            let dataPointDisplayValues = mappCockpitComponentReflection_1.MappCockpitComponentParameterInfo.retrieveTraceConfigurationDatapointValues(this.mappCockpitComponent.parameters);
            let datapoints = this.getDataPoints(dataPointDisplayValues);
            // get timing parameters
            let timingParameterInfos = mappCockpitComponentReflection_1.MappCockpitComponentParameterInfo.retrieveTraceConfigurationTimingParameters(this.mappCockpitComponent.parameters);
            // get start triggers
            let startTriggers = mappCockpitComponentReflection_1.MappCockpitComponentParameterInfo.retrieveTraceConfigurationStartTriggers(this.mappCockpitComponent.parameters);
            // create trace configuration data
            return new traceConfigData_1.TraceConfigurationData(datapoints, timingParameterInfos, startTriggers);
        }
        /**
         * Returns an array with the trace datapoint infos for the given trace datapoint display values
         *
         * @private
         * @param {string[]} dataPointDisplayValues
         * @return {*}  {Array<TraceDataPoint>}
         * @memberof MappCockpitTraceComponent
         */
        getDataPoints(dataPointDisplayValues) {
            let datapoints = new Array();
            for (let datapointDisplayValue of dataPointDisplayValues) {
                if (datapointDisplayValue != "") {
                    let newDatapoint = traceDataPoint_1.TraceDataPoint.createSimpleDataPoint(datapointDisplayValue);
                    if (this._availableTraceDataPoints != undefined) {
                        let dataPointInfo = this._availableTraceDataPoints.value.filter(ele => { return ele.fullname == datapointDisplayValue; })[0];
                        if (dataPointInfo != undefined) {
                            newDatapoint = traceDataPoint_1.TraceDataPoint.createWithDataPointInfo(dataPointInfo);
                        }
                    }
                    datapoints.push(newDatapoint);
                }
            }
            return datapoints;
        }
        updateDataPointInformations(traceConfigurationData) {
            traceConfigurationData.dataPoints.forEach(datapoint => {
                let dataPointInfo = this._availableTraceDataPoints.value.filter(ele => { return ele.fullname == datapoint.dataPointName; })[0];
                if (dataPointInfo != undefined) {
                    var newDatapoint = traceDataPoint_1.TraceDataPoint.createWithDataPointInfo(dataPointInfo);
                    datapoint.componentName = newDatapoint.componentName;
                    datapoint.name = newDatapoint.name;
                    datapoint.description = newDatapoint.description;
                }
            });
        }
        set availableTraceDataPoints(dataPoints) {
            this._availableTraceDataPoints = dataPoints;
        }
        /**
         * Returns traceConfigurationData
         *
         * @readonly
         * @type {InterfaceTraceData}
         * @memberof MappCockpitTraceComponent
         */
        get traceConfigurationData() {
            return this._traceConfigurationData;
        }
        set traceConfigurationData(traceConfigurationData) {
            this._traceConfigurationData = traceConfigurationData;
            this.updateParameterInterface();
        }
        /**
         * Gets the MappCockpitComponent
         *
         * @readonly
         * @type {MappCockpitComponent}
         * @memberof MappCockpitTraceComponent
         */
        get mappCockpitComponent() {
            return this._mappCockpitComponent;
        }
        /**
         * Gets the TraceControlInterface
         *
         * @readonly
         * @type {ITraceComponentControl}
         * @memberof MappCockpitTraceComponent
         */
        get traceControlInterface() {
            return this._traceControl;
        }
        /**
         * Gets the DisplayName
         *
         * @readonly
         * @type {string}
         * @memberof MappCockpitTraceComponent
         */
        get displayName() {
            return this._mappCockpitComponent.displayName;
        }
    };
    MappCockpitTraceComponent = __decorate([
        mco.role()
    ], MappCockpitTraceComponent);
    exports.MappCockpitTraceComponent = MappCockpitTraceComponent;
});
