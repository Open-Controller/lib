import { Widget, WidgetConstructor } from "./Widget"
import { Action } from "../../Action/Action"

export const GridLayout:WidgetConstructor = class implements Widget {
    children:Widget[]
    height:number;
    width:number;
    variant="GridLayout"
    constructor({height,width}:{height:number,width:number},children:Widget[]){
        this.children = children
        this.height = height
        this.width = width
    }
}