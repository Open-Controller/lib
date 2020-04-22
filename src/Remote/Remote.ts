import { LayoutGroup } from "./LayoutGroup/LayoutGroup";

interface RemoteLayout {
    upper:{
        left:LayoutGroup,
        center:LayoutGroup,
        right:LayoutGroup
    },
    top:{
        left:LayoutGroup,
        center:LayoutGroup,
        right:LayoutGroup
    },
    middle:{
        left:LayoutGroup,
        center:LayoutGroup,
        right:LayoutGroup
    },
    bottom:{
        left:LayoutGroup,
        center:LayoutGroup,
        right:LayoutGroup
    }
}

export class Remote {
    name:string
    layout:RemoteLayout
    constructor({name,layout}:{name:string,layout:RemoteLayout}){
        this.name = name
        this.layout = layout
    }
}