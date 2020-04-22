import { LayoutGroup } from "./LayoutGroup"
import { Action } from "../../Action/Action"

export class VLayout implements LayoutGroup {
    actions:Action[]
    constructor(actions:Action[]){
        this.actions = actions
    }
}