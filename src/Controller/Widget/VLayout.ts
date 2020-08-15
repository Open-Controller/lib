import { Widget,WidgetConstructor } from "./Widget"

export class VLayout implements Widget {
    children:Widget[]
    variant="VLayout"
    constructor(children:Widget[]){
        this.children = children
    }
    static fromJSON(json: { children: any[]; }){
        return new VLayout(json.children.map(Widget.fromJSON));
    }
}

const check:WidgetConstructor<{}> = VLayout