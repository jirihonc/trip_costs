/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = __webpack_require__(0);
// import { CostData } from "../functions/TripCost";
const TripCost_1 = __webpack_require__(4);
const CostsForm_1 = __webpack_require__(3);
class CostCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 100,
            persons: 4,
            consumtion: 6.5,
            fuelCosts: 30,
            costPerPerson: 48.75
        };
        this.formChanged = this.formChanged.bind(this);
    }
    formChanged(event) {
        const target = event.target;
        const name = target.name;
        let formValues = __assign({}, this.state, { [name]: target.value });
        let cost = TripCost_1.default(formValues);
        this.setState(__assign({}, formValues, { ['costPerPerson']: cost }));
    }
    render() {
        const dist = this.state.distance;
        const pers = this.state.persons;
        const consum = this.state.consumtion;
        const fuel = this.state.fuelCosts;
        const costs = this.state.costPerPerson.toFixed(2);
        return (React.createElement("div", null,
            React.createElement("h2", null, this.props.label),
            React.createElement(CostsForm_1.CostsForm, { distance: dist, persons: pers, consumtion: consum, fuelCosts: fuel, handleInputChange: this.formChanged }),
            React.createElement("h3", null,
                "Costs per person: ",
                costs)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CostCalculator;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const React = __webpack_require__(0);
class CostsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.props.handleInputChange(event);
    }
    render() {
        return (React.createElement("fieldset", null,
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("label", { htmlFor: "distance" }, "total distance (there and back):")),
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("input", { type: "number", value: this.props.distance, onChange: this.handleInputChange, id: "distance", name: "distance" })),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("label", { htmlFor: "persons" }, "num. of persons:")),
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("input", { type: "number", value: this.props.persons, onChange: this.handleInputChange, id: "persons", name: "persons" })),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("label", { htmlFor: "consumtion" }, "car consumption:")),
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("input", { type: "number", value: this.props.consumtion, onChange: this.handleInputChange, id: "consumtion", name: "consumtion" })),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("label", { htmlFor: "fuelCosts" }, "fuel cost:")),
                React.createElement("div", { className: "col-md-8" },
                    React.createElement("input", { type: "number", value: this.props.fuelCosts, onChange: this.handleInputChange, id: "fuelCosts", name: "fuelCosts" })))));
    }
}
exports.CostsForm = CostsForm;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class CostData {
    constructor(distance, persons, consumtion, fuelCosts) {
        this.distance = distance;
        this.persons = persons;
        this.consumtion = consumtion;
        this.fuelCosts = fuelCosts;
    }
}
exports.CostData = CostData;
function default_1(data) {
    if (data.persons === 0) {
        return 0;
    }
    let allCosts = (data.distance / 100) * data.consumtion * data.fuelCosts;
    return allCosts / data.persons;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
/*

export function personCosts (data: CostData): number {
    let allCosts = (data.distance / 100) * data.consumtion * data.fuelCosts;
    return  allCosts / this.persons;
}

export class TripCost extends CostData {
    

    constructor(data: CostData) {
        super(data.distance, data.persons, data.consumtion, data.fuelCosts);
    }

    calculateAllCosts() {
        return (this.distance / 100) * this.consumtion * this.fuelCosts;
    }

    calculatePerPerson() {
        return this.calculateAllCosts() / this.persons;
    }

}*/ 


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(2);
const CostCalculator_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(CostCalculator_1.default, { label: "Calculate trip costs" }), document.getElementById("example"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map