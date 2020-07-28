import { Widget, WidgetConstructor } from "./Widget"
import { Action } from "../../Action"

export const Button:WidgetConstructor = class implements Widget {
    action:Action
    icon:string
    variant="Button"
    constructor({action,icon}:{action:Action,icon?:string},children:Widget[]){
        this.action = action
        this.icon = icon
    }
}