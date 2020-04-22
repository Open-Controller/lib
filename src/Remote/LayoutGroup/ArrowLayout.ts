import { Action } from "../../Action/Action"
import { LayoutGroup } from "./LayoutGroup"

export class ArrowLayout implements LayoutGroup {
    left:Action
    right:Action
    top:Action
    bottom:Action
    constructor({left,right,top,bottom}:{left:Action,right:Action,top:Action,bottom:Action}){
        this.left = left
        this.right = right
        this.top = top
        this.bottom = bottom
    }
}
