
export class CostData {
    distance: number;
    persons: number;
    consumtion: number;
    fuelCosts: number;

    constructor(distance: number, persons: number, consumtion: number, fuelCosts: number) {
        this.distance = distance;
        this.persons = persons;
        this.consumtion = consumtion;
        this.fuelCosts = fuelCosts;
    }        
} 

export default function (data: CostData): number {
    if (data.persons === 0) {
        return 0;
    }
    let allCosts = (data.distance / 100) * data.consumtion * data.fuelCosts;
    return  allCosts / data.persons;  
} 

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