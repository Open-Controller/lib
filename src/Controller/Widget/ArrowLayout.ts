import { Widget, WidgetConstructor } from "./Widget"

export const ArrowLayout:WidgetConstructor = class implements Widget {
    left:Widget
    right:Widget
    center:Widget
    top:Widget
    bottom:Widget
    variant="ArrowLayout"
    constructor(children:Widget[]){
        this.left = children[0]
        this.right = children[1]
        this.center = children[2]
        this.top = children[3]
        this.bottom = children[4]
    }
}
