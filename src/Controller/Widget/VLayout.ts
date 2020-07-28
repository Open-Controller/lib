import { Widget,WidgetConstructor } from "./Widget"

export const VLayout:WidgetConstructor = class implements Widget {
    children:Widget[]
    variant="VLayout"
    constructor(children:Widget[]){
        this.children = children
    }
}