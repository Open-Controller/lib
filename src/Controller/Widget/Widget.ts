import { ArrowLayout, Blank, Button, GridLayout, HLayout, VLayout } from "../";
import { Action } from "../../Action";

export interface WidgetConstructor<T extends object> {
    new (attributes?:T,children?:Widget[]):Widget
}

export interface Widget {
    variant:string;
}

export class Widget {
    static fromJSON(json:any){
        if (json.variant == "ArrowLayout") 
            return new ArrowLayout({left:json.left,right:json.right,top:json.top,bottom:json.bottom,center:json.center});
        if (json.variant == "Blank")
            return new Blank();
        if (json.variant == "Button")
            return new Button({action:Action.fromJSON(json.action),icon:json.icon});
        if (json.variant == "GridLayout")
            return new GridLayout({height:json.height,width:json.width},json.children.map(Widget.fromJSON));
        if (json.variant == "HLayout")
            return new HLayout(json.children.map(Widget.fromJSON));
        if (json.variant == "VLayout")
            return new VLayout(json.children.map(Widget.fromJSON));
    }
}

export const createWidget = <T extends WidgetConstructor<any>>(widget:T,attributes?:object,...children:Widget[])=>{
    if (attributes && children) return new widget(attributes,children)
    else if (attributes) return new widget(attributes)
    else if (children) return new widget(children)
}