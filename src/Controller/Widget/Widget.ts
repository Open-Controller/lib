import { ArrowLayout, Blank, Button, GridLayout, HLayout, VLayout } from "../";
import { Action } from "../../Action";
import { DynamicText } from "./DynamicText";
import { DynamicValue } from "../../DynamicValue";

export interface WidgetConstructor<T extends object> {
    new (attributes?:T,children?:Widget[]):Widget
}

export interface Widget {
    variant:string;
}

export class Widget {
    static fromJSON(json:any){
        if (json.variant == "ArrowLayout") 
            return ArrowLayout.fromJSON(json)
        if (json.variant == "Blank")
            return Blank.fromJSON(json)
        if (json.variant == "Button")
            return Button.fromJSON(json)
        if (json.variant == "GridLayout")
            return GridLayout.fromJSON(json)
        if (json.variant == "HLayout")
            return HLayout.fromJSON(json)
        if (json.variant == "VLayout")
            return VLayout.fromJSON(json)
        if (json.variant == "DynamicText")
            return DynamicText.fromJSON(json)        
    }
}

export const createWidget = <T extends WidgetConstructor<any>>(widget:T,attributes?:object,...children:Widget[])=>{
    if (attributes && children) return new widget(attributes,children)
    else if (attributes) return new widget(attributes)
    else if (children) return new widget(children)
}