import { Widget, WidgetConstructor } from "./Widget"

export class GridLayout implements Widget {
    children:Widget[]
    height:number;
    width:number;
    __variant__="GridLayout"
    constructor({height,width}:{height:number,width:number},children:Widget[]){
        this.children = children
        this.height = height
        this.width = width
    }
    static fromJSON(json: { height: number; width: number; children: any[]; }){
        return new GridLayout({height:json.height,width:json.width},json.children.map(Widget.fromJSON));
    }
}

const check:WidgetConstructor<{height:number,width:number}> = GridLayout