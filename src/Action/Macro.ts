import { Action, ActionSuccess } from "./Action";

export class Macro implements Action {
    actions:Action[]
    name:string
    constructor({name,actions}:{name:string,actions:Action[]}){
        this.actions = actions
        this.name = name
    }
    async run():Promise<ActionSuccess>{
        return {
            successful:this.actions.every(async action=>(await action.run()).successful)
        }
    }
}