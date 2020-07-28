import { Widget, WidgetConstructor } from "./Widget"

export const HLayout:WidgetConstructor = class implements Widget {
    children:Widget[]
    variant="HLayout"
    constructor(children:Widget[]){
        this.children = children
    }
}