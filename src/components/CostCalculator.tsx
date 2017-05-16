
import * as React from "react";
import * as ReactDOM from "react-dom";

// import { CostData } from "../functions/TripCost";
import personCosts, { CostData } from "../functions/TripCost";
import {CostsForm} from "./CostsForm";

interface LabelProps {label: string}

interface CalculatorState extends CostData {
    costPerPerson: number;
} 

export default class CostCalculator extends React.Component<LabelProps, CalculatorState> {

    constructor(props: LabelProps) {
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

    formChanged(event: any) {
        const target = event.target;
        const name = target.name;

        let formValues = {...this.state, [name]: target.value};

        let cost = personCosts(formValues);

        this.setState({...formValues,
            ['costPerPerson']: cost
        }); 
    }  

    render() {
        const dist = this.state.distance;
        const pers = this.state.persons;
        const consum = this.state.consumtion;
        const fuel = this.state.fuelCosts;
        const costs = this.state.costPerPerson.toFixed(2); 

        return (
            <div>
                <h2>{this.props.label}</h2>
                <CostsForm distance={dist} persons={pers} consumtion={consum} fuelCosts={fuel} handleInputChange={this.formChanged}/>
                <h3>Costs per person: {costs}</h3>
            </div>
         
        );    
    }    
}