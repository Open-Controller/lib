import { Widget, WidgetConstructor } from "./Widget"
import { DynamicValue } from "../../DynamicValue"

export class DynamicText implements Widget {
    text:DynamicValue<string|number>
    variant="DynamicText"
    constructor({text}:{text:DynamicValue<string|number>}){
        this.text = text
    }
}

const check:WidgetConstructor<{text:DynamicValue<string|number>}> = DynamicText