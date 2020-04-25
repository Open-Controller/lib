import { Action } from "../../Action/Action"
import { LayoutGroup } from "./LayoutGroup"

export class ArrowLayout implements LayoutGroup {
    left:Action
    right:Action
    center:Action
    top:Action
    bottom:Action
    constructor({left,right,center,top,bottom}:{left:Action,right:Action,center:Action,top:Action,bottom:Action}){
        this.left = left
        this.right = right
        this.center = center
        this.top = top
        this.bottom = bottom
    }
}
