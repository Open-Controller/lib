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
}

const check:WidgetConstructor<{}> = ArrowLayout