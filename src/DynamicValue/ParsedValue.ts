import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] reducer returning the input JSON parsed
 * 
 * @example
 * ```javascript
 * new ParsedValue(new TextValue(JSON.stringify({t:"test"}))).onValue(parsed=>
 *  parsed.t === "test" //true
 * )
 * ```
 */
export class ParsedValue implements DynamicValue<number|string|object> {
    __variant__="ParsedValue"
    input:DynamicValue<string>
    name:string|void
    constructor(input:DynamicValue<string>,name?:string){
        this.input = input
        this.name = name
    }
    onValue(listener:Listener<number|string|object>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(JSON.parse(val))
        })
        return ()=> {
            unsubscribe()
        }
    }
    getValue(){
        return JSON.parse(this.input.getValue())
    }
    static fromJSON(json: { input: any, name?:string }){
        return new ParsedValue(DynamicValue.fromJSON(json.input),json.name)
    }
}