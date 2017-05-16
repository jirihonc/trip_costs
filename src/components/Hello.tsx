import * as React from "react";


export interface HelloProps { compiler: string; framework: string; costs: number}

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!, final costs is {props.costs},- per person</h1>;