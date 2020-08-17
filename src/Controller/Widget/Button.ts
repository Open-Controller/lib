import { Widget, WidgetConstructor } from "./Widget"
import { Action } from "../../Action"
import { staticImplements } from "../../utils/staticImplements"

/**
 * A [[Widget]] that holds an [[Action]], and when pressed on the client the action is run
 * 
 * @example
 * ```typescript
 * new Button({icon:"power-on",action: new HttpAction({
 *       name:"on",
 *       method:"GET",
 *       base:"https://device.ip",
 *       path:"turnOn"
 *    })
 * })
 * ```
 */
@staticImplements<WidgetConstructor<{action:Action,icon?:string}>>()
export class Button implements Widget {
    action:Action
    icon:string
    __variant__="Button"
    constructor({action,icon}:{action:Action,icon?:string}){
        this.action = action
        this.icon = icon
    }
    static fromJSON(json: { action: any; icon: string }){
        return new Button({action:Action.fromJSON(json.action),icon:json.icon});
    }
}