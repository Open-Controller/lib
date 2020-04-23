import { LayoutGroup } from "./LayoutGroup/LayoutGroup";

interface RemoteLayoutSection {
    left:LayoutGroup,
    center:LayoutGroup,
    right:LayoutGroup
}

export class Remote {
    name:string
    layout:RemoteLayoutSection[]
    constructor({name,layout}:{name:string,layout:RemoteLayoutSection[]}){
        this.name = name
        this.layout = layout
    }
}