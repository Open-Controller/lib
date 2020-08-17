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
    constructor(input:DynamicValue<string>){
        this.input = input
    }
    onValue(listener:Listener<number|string|object>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(JSON.parse(val))
        })
        return ()=> {
            unsubscribe()
        }
    }
    static fromJSON(json: { input: any }){
        return new ParsedValue(DynamicValue.fromJSON(json.input))
    }
}