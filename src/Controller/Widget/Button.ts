import { Widget, WidgetConstructor } from "./Widget"
import { Action } from "../../Action"

export class Button implements Widget {
    action:Action
    icon:string
    variant="Button"
    constructor({action,icon}:{action:Action,icon?:string}){
        this.action = action
        this.icon = icon
    }
    static fromJSON(json: { action: any; icon: string }){
        return new Button({action:Action.fromJSON(json.action),icon:json.icon});
    }
}

const check:WidgetConstructor<{action:Action,icon?:string}> = Button