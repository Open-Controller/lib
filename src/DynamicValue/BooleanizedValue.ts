import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] reducer returning the truthiness of the input
 * 
 * @example
 * ```javascript
 * new BooleanizedValue(new TextValue("")).onValue(value=>
 *  value //false
 * )
 * ```
 */
export class BooleanizedValue implements DynamicValue<boolean> {
    __variant__="BooleanizedValue"
    input:DynamicValue<any>
    name:string|void
    constructor(input:DynamicValue<any>,name?:string){
        this.input = input
        this.name = name
    }
    onValue(listener:Listener<boolean>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(!!val)
        })
        return ()=> {
            unsubscribe()
        }
    }
    async getValue(){
        return !!await this.input.getValue()
    }
    static fromJSON(json: { input: any, name?:string }){
        return new BooleanizedValue(DynamicValue.fromJSON(json.input),json.name)
    }
}