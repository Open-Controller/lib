import { Widget, WidgetConstructor } from "./Widget"
import { Action } from "../../Action"
import { staticImplements } from "../../utils/staticImplements"
import { DynamicValue } from "../../DynamicValue"

/**
 * A [[Widget]] that holds an [[Action]] and a [[DynamicValue]], and when pressed on the client the action is run, and is highlighted based on the value of the DynamicValue
 * 
 * @example
 * ```jsx
 * new ToggleButton({icon:"power-on",action: new HttpAction({
 *       name:"on",
 *       method:"GET",
 *       base:"https://device.ip",
 *       path:"turnOn"
 *    }),
 *    state:new ParsedValue(new TextValue("true"))
 * })
 * //JSX
 * <ToggleButton icon="power-on" state={new ParsedValue(new TextValue("true"))} action={new HttpAction({
 *       name:"on",
 *       method:"GET",
 *       base:"https://device.ip",
 *       path:"turnOn"
 *    })}/>
 * ```
 */
@staticImplements<WidgetConstructor<{action:Action,state:DynamicValue<boolean>,icon?:string}>>()
export class ToggleButton implements Widget {
    action:Action
    icon:string
    state:DynamicValue<boolean>
    __variant__="ToggleButton"
    constructor({action,state,icon}:{action:Action,state:DynamicValue<boolean>,icon?:string}){
        this.action = action
        this.icon = icon
        this.state = state
    }
    static fromJSON(json: { action: any; state:any; icon: string }){
        return new ToggleButton({action:Action.fromJSON(json.action),state:DynamicValue.fromJSON(json.state),icon:json.icon});
    }
}