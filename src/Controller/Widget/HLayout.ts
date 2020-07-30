import { Widget, WidgetConstructor } from "./Widget"

export class HLayout implements Widget {
    children:Widget[]
    variant="HLayout"
    constructor(children:Widget[]){
        this.children = children
    }
}

const check:WidgetConstructor<{}> = HLayout