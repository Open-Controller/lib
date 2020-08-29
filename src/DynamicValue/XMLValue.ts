import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"
import { parse as parseXML, X2jOptionsOptional } from "fast-xml-parser"

/**
 * A [[DynamicValue]] reducer returning the input XML parsed
 * 
 * @example
 * ```javascript
 * new XMLValue(new TextValue("<root>test</root>")).onValue(parsed=>
 *  parsed.root === "test" //true
 * )
 * ```
 */
export class XMLValue implements DynamicValue<object> {
    __variant__="XMLValue"
    input:DynamicValue<string>
    name:string|void
    options:X2jOptionsOptional
    constructor(input:DynamicValue<string>,options?: X2jOptionsOptional,name?:string){
        this.input = input
        this.name = name
        this.options = options
    }
    onValue(listener:Listener<object>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(parseXML(val,this.options))
        })
        return ()=> {
            unsubscribe()
        }
    }
    async getValue(){
        return parseXML(await this.input.getValue(),this.options)
    }
    static fromJSON(json: { input: any, options?: X2jOptionsOptional,name?:string }){
        return new XMLValue(DynamicValue.fromJSON(json.input),json.options,json.name)
    }
}