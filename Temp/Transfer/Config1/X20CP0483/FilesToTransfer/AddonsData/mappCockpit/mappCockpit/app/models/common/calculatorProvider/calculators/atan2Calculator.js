var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../../point", "../calculationDataPoints", "../calculationDataDisplayInfo", "./calculatorBase", "./calculatorHelper"], function (require, exports, point_1, calculationDataPoints_1, calculationDataDisplayInfo_1, calculatorBase_1, calculatorHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Atan2Calculator = void 0;
    let Atan2Calculator = class Atan2Calculator extends calculatorBase_1.CalculatorBase {
        constructor() {
            super("atan2", "Atan2(a)", "Calculates the arctangent value of all four quadrants of a signal");
            this.inputId = "InputSignalA";
            this.inputName = "Input signal a";
            this.outputId = "OutputSignal";
            this.outputName = "Output signal";
            this.outputValue = "atan2";
        }
        getDefaultInputData() {
            let defaultInputData = super.getDefaultInputData();
            defaultInputData.push(new calculationDataPoints_1.CalculationDataPoints(this.inputId, this.inputName, "", new Array(), "The signal whose absolute value is calculated", new calculationDataDisplayInfo_1.CalculationDataDisplayInfo(false, true)));
            return defaultInputData;
        }
        getDefaultOutputData() {
            let defaultOutputData = super.getDefaultOutputData();
            defaultOutputData.push(new calculationDataPoints_1.CalculationDataPoints(this.outputId, this.outputName, this.outputValue, new Array()));
            return defaultOutputData;
        }
        verifyCalculationInputData() {
            super.verifyCalculationInputData();
            let calculationInputDataContainer = this.getCalculationInputDataContainer();
            let inputSignal = calculationInputDataContainer[0];
            if (inputSignal == undefined || !calculatorHelper_1.CalculatorHelper.calculationInputDataIsSignal(inputSignal.data)) {
                this.addErrorByType(calculatorBase_1.ErrorMessageType.MissingOrInvalidInput, [this.inputName]);
            }
        }
        executeAlgorithm() {
            super.executeAlgorithm();
            let calculationInputDataContainer = this.getCalculationInputDataContainer();
            let result = new Array();
            let inputSignal = calculationInputDataContainer[0];
            if (calculatorHelper_1.CalculatorHelper.calculationInputDataIsSignal(inputSignal.data)) {
                result = this.atan2Signal(inputSignal.data);
            }
            this.addCalculationOutputData({
                data: result,
                value: this.outputValue,
                name: this.outputName,
                id: this.outputId
            });
        }
        /**
         * Calculates output signal
         *
         * @private
         * @param {Array<IPoint>} inputSignal
         * @returns {Array<IPoint>}
         * @memberof Atan2Calculator
         */
        atan2Signal(inputSignal) {
            let points = new Array();
            for (let i = 0; i < inputSignal.length; i++) {
                let x = inputSignal[i].x;
                let y = Math.atan2(inputSignal[i].y, inputSignal[i].x);
                points.push(new point_1.Point(x, y));
            }
            return points;
        }
    };
    Atan2Calculator = __decorate([
        mco.role()
    ], Atan2Calculator);
    exports.Atan2Calculator = Atan2Calculator;
});
