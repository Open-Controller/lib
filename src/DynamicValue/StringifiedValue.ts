import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] reducer returning the stringified version of the input
 * 
 * @example
 * ```javascript
 * new StringifiedValue(new NumberValue(1)).onValue(value=>
 *  value === "1" //true
 * )
 * ```
 */
export class StringifiedValue implements DynamicValue<string> {
    __variant__="StringifiedValue"
    input:DynamicValue<any>
    name:string|void
    constructor(input:DynamicValue<any>,name?:string){
        this.input = input
        this.name = name
    }
    onValue(listener:Listener<string>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(JSON.stringify(val))
        })
        return ()=> {
            unsubscribe()
        }
    }
    async getValue(){
        return JSON.stringify(await this.input.getValue())
    }
    static fromJSON(json: { input: any, name?:string }){
        return new StringifiedValue(DynamicValue.fromJSON(json.input),json.name)
    }
}