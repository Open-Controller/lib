import { LayoutGroup } from "./LayoutGroup/LayoutGroup";

export class Remote {
    name:string
    layout:(LayoutGroup|null)[][]
    constructor({name,layout}:{name:string,layout:(LayoutGroup|null)[][]}){
        this.name = name
        this.layout = layout
    }
}