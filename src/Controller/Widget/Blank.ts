import { Widget, WidgetConstructor } from "./Widget"

export class Blank implements Widget {
    __variant__="Blank"
    static fromJSON(_:any){
        return new Blank()
    }
}

const check:WidgetConstructor<{}> = Blank;