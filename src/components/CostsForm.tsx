import * as React from "react";
import * as ReactDOM from "react-dom";

import { CostData } from "../functions/TripCost";

export interface FormState extends CostData {
    handleInputChange: (event: any) => void;
}


export class CostsForm extends React.Component<FormState, null> {

    constructor(props: FormState) {
        super(props);        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: any) {
        this.props.handleInputChange(event);   
    }



    render() {
        return (
            
            <fieldset>
                <div className="row">
                    <div className="col-md-4"><label htmlFor="distance">total distance (there and back):</label></div>
                    <div className="col-md-8"><input type="number" value={this.props.distance} onChange={this.handleInputChange} id="distance" name="distance"/></div>

                    <div className="col-md-4"><label htmlFor="persons">num. of persons:</label></div>
                    <div className="col-md-8"><input type="number" value={this.props.persons} onChange={this.handleInputChange} id="persons" name="persons" /></div>

                    <div className="col-md-4"><label htmlFor="consumtion">car consumption:</label></div>
                    <div className="col-md-8"><input type="number" value={this.props.consumtion} onChange={this.handleInputChange} id="consumtion" name="consumtion"/></div>

                    <div className="col-md-4"><label htmlFor="fuelCosts">fuel cost:</label></div>
                    <div className="col-md-8"><input type="number" value={this.props.fuelCosts} onChange={this.handleInputChange} id="fuelCosts" name="fuelCosts"/></div>                
                </div>
            </fieldset>           
        );    
    }

}