import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"
import { parseStringPromise as parseXML } from "xml2js"

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
    constructor(input:DynamicValue<string>,name?:string){
        this.input = input
        this.name = name
    }
    onValue(listener:Listener<object>):Unsubscriber{
        const unsubscribe = this.input.onValue(async val=> {
            listener(await parseXML(val))
        })
        return ()=> {
            unsubscribe()
        }
    }
    async getValue(){
        return await parseXML(await this.input.getValue())
    }
    static fromJSON(json: { input: any, name?:string }){
        return new XMLValue(DynamicValue.fromJSON(json.input),json.name)
    }
}