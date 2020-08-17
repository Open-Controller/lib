import { Widget, WidgetConstructor } from "./Widget"
import { DynamicValue } from "../../DynamicValue"

/**
 * A [[Widget]] to display a [[DynamicValue]] holding a string
 * 
 * @example
 * ```typescript
 * new DynamicText({text:new TextValue("test")})
 * ```
 */
export class DynamicText implements Widget {
    text:DynamicValue<string>
    __variant__="DynamicText"
    constructor({text}:{text:DynamicValue<string>}){
        this.text = text
    }
    static fromJSON(json: { text: any }){
        return new DynamicText({text:DynamicValue.fromJSON(json.text)})
    }
}

const check:WidgetConstructor<{text:DynamicValue<string>}> = DynamicText