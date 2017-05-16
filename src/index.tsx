import * as React from "react";
import * as ReactDOM from "react-dom";
import CostCalculator from "./components/CostCalculator";


ReactDOM.render(
    <CostCalculator label="Calculate trip costs" />, 
    document.getElementById("example")
);