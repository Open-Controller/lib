import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] that holds a constant `number` value
 */
export class NumberValue implements DynamicValue<number> {
    __variant__="NumberValue"
    input:number
    name:string|void
    constructor(input:number,name?:string){
        this.input = input
        this.name = name
    }
    onValue(listener:Listener<number>):Unsubscriber{
        listener(this.input)
        return ()=> {}
    }
    async getValue(){
        return this.input
    }
    static fromJSON(json:{input:number,name?:string}){
        return new NumberValue(json.input,json.name)
    }
}