import { ArrowLayout, Blank, Button, GridLayout, HLayout, VLayout } from "../";
import { Action } from "../../Action";
import { DynamicText } from "./DynamicText";
import { DynamicValue } from "../../DynamicValue";

export interface WidgetConstructor<T extends object> {
    new (attributes?:T,children?:Widget[]):Widget
}

/**
 * Widgets are the building blocks of [[Controller]]s. They represent a visual component on the client side; their usage is determined solely by the client.
 */
export interface Widget {
    /**Metadata holding the class name of the Widget, so it can be mapped back to the class from a JSON */
    __variant__:string;
}

export class Widget {
    /**
     * Maps a JSON object to an instance of its class
     */
    static fromJSON(json:any):Widget{
        if (json.__variant__ == "ArrowLayout") 
            return ArrowLayout.fromJSON(json)
        if (json.__variant__ == "Blank")
            return Blank.fromJSON(json)
        if (json.__variant__ == "Button")
            return Button.fromJSON(json)
        if (json.__variant__ == "GridLayout")
            return GridLayout.fromJSON(json)
        if (json.__variant__ == "HLayout")
            return HLayout.fromJSON(json)
        if (json.__variant__ == "VLayout")
            return VLayout.fromJSON(json)
        if (json.__variant__ == "DynamicText")
            return DynamicText.fromJSON(json)     
        return null   
    }
}

/**
 * A function to create an instance of a [[Widget]], intended to be used for JSX
 */
export const createWidget = <T extends WidgetConstructor<any>>(widget:T,attributes?:object,...children:Widget[])=>{
    if (attributes && children.length) return new widget(attributes,children)
    else if (attributes) return new widget(attributes)
    else if (children.length) return new widget(children)
    else return null  
}