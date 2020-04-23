import { LayoutGroup } from "./LayoutGroup/LayoutGroup";

interface RemoteLayoutSection {
    left:LayoutGroup|null|undefined,
    center:LayoutGroup|null|undefined,
    right:LayoutGroup|null|undefined
}

export class Remote {
    name:string
    layout:RemoteLayoutSection[]
    constructor({name,layout}:{name:string,layout:RemoteLayoutSection[]}){
        this.name = name
        this.layout = layout
    }
}