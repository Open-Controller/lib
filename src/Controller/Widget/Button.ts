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
}

const check:WidgetConstructor<{action:Action,icon?:string}> = Button