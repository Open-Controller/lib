import { Widget, WidgetConstructor } from "./Widget"
import { DynamicValue } from "../../DynamicValue"

export class DynamicText implements Widget {
    text:DynamicValue<string>
    key:string
    variant="DynamicText"
    constructor({text,key}:{text:DynamicValue<string>,key:string}){
        this.text = text
        this.key = key
    }
}

const check:WidgetConstructor<{text:DynamicValue<string>}> = DynamicText