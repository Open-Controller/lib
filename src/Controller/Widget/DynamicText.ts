import { Widget, WidgetConstructor } from "./Widget"
import { DynamicValue } from "../../DynamicValue"

export class DynamicText implements Widget {
    text:DynamicValue<string>
    key:string
    __variant__="DynamicText"
    constructor({text,key}:{text:DynamicValue<string>,key:string}){
        this.text = text
        this.key = key
    }
    static fromJSON(json: { text: any; key: string }){
        return new DynamicText({text:DynamicValue.fromJSON(json.text),key:json.key})
    }
}

const check:WidgetConstructor<{text:DynamicValue<string>}> = DynamicText