import { Widget, WidgetConstructor } from "./Widget"
import { DynamicValue } from "../../DynamicValue"
import { staticImplements } from "../../utils/staticImplements"

/**
 * A [[Widget]] to display a [[DynamicValue]] holding a string
 * 
 * @example
 * ```jsx
 * new DynamicText({text:new TextValue("test")})
 * //JSX
 * <DynamicText text={new TextValue("test")}/>
 * ```
 */
@staticImplements<WidgetConstructor<{text:DynamicValue<string>}>>()
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