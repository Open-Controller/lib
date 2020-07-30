import { Widget,WidgetConstructor } from "./Widget"

export class VLayout implements Widget {
    children:Widget[]
    variant="VLayout"
    constructor(children:Widget[]){
        this.children = children
    }
}

const check:WidgetConstructor<{}> = VLayout