import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] reducer returning the input split by a delimiter
 * 
 * @example
 * ```javascript
 * new SplitValue(new TextValue("a,b,c"),",").onValue(split=>
 *  parsed[0] === "a" //true
 * )
 * ```
 */
export class SplitValue implements DynamicValue<string[]> {
    __variant__="SplitValue"
    input:DynamicValue<string>
    name:string|void
    delimiter:string
    constructor(input:DynamicValue<string>,delimiter:string,name?:string){
        this.input = input
        this.delimiter = delimiter
        this.name = name
    }
    onValue(listener:Listener<string[]>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(val.split(this.delimiter))
        })
        return ()=> {
            unsubscribe()
        }
    }
    async getValue(){
        return (await this.input.getValue()).split(this.delimiter)
    }
    static fromJSON(json: { input: any, delimiter:string, name?:string }){
        return new SplitValue(DynamicValue.fromJSON(json.input),json.delimiter,json.name)
    }
}