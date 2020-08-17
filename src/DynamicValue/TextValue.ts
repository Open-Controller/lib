import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] that holds a constant `string` value
 */
export class TextValue implements DynamicValue<string> {
    __variant__="TextValue"
    text:string
    name:string|void
    constructor(text:string,name?:string){
        this.text = text
        this.name = name
    }
    onValue(listener:Listener<string>):Unsubscriber{
        listener(this.text)
        return ()=> {}
    }
    static fromJSON(json:{text:string,name?:string}){
        return new TextValue(json.text,json.name)
    }
}