import { Widget } from "./Widget/Widget";

export class Controller {
    name:string
    layout:Widget[]
    constructor({name,layout}:{name:string,layout:Widget[]}){
        this.name = name
        this.layout = layout
    }
}