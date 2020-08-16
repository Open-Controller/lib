import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

export class ParsedValue implements DynamicValue<unknown> {
    variant="ParsedValue"
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