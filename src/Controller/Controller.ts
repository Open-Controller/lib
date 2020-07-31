import { Widget } from "./Widget/Widget";

export class Controller {
    name:string
    layout:Widget[]
    constructor({name,layout}:{name:string,layout:Widget[]}){
        this.name = name
        this.layout = layout
    }
    static fromJSON(json:any){
        return new Controller({
            name:json.name,
            layout:json.layout.map(widget=>Widget.fromJSON(widget))
        })
    }
}