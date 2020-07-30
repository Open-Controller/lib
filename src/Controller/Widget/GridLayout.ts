import { Widget, WidgetConstructor } from "./Widget"

export class GridLayout implements Widget {
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

const check:WidgetConstructor<{height:number,width:number}> = GridLayout