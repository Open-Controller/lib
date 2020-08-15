import { Widget, WidgetConstructor } from "./Widget"

export class ArrowLayout implements Widget {
    left:Widget
    right:Widget
    center:Widget
    top:Widget
    bottom:Widget
    variant="ArrowLayout"
    constructor({left,right,top,bottom,center}:{
        left:Widget
        right:Widget
        center:Widget
        top:Widget
        bottom:Widget
    }){
        this.left = left
        this.right = right
        this.center = center
        this.top = top
        this.bottom = bottom
    }
    static fromJSON(json: { left: any; right: any; top: any; bottom: any; center: any }){
        return new ArrowLayout({left:Widget.fromJSON(json.left),right:Widget.fromJSON(json.right),top:Widget.fromJSON(json.top),bottom:Widget.fromJSON(json.bottom),center:Widget.fromJSON(json.center)});
    }
}

const check:WidgetConstructor<{}> = ArrowLayout