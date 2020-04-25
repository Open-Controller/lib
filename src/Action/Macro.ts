import { Action, ActionSuccess } from "./Action";

export class Macro implements Action {
    actions:Action[]
    name:string
    icon?:string
    constructor({name,actions,icon}:{name:string,actions:Action[],icon?:string}){
        this.actions = actions
        this.name = name
        this.icon = icon
    }
    async run():Promise<ActionSuccess>{
        return {
            successful:this.actions.every(async action=>(await action.run()).successful)
        }
    }
}