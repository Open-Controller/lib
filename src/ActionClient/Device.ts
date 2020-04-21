import { Action, ActionSuccess } from "../Action/Action";
import { ActionClient } from "./ActionClient";

export class Device implements ActionClient{
    name:string
    actions:Action[]
    constructor({name,actions}:{name:string,actions:Action[]}){
        this.name = name
        this.actions = actions
    }
    async run(action:string):Promise<ActionSuccess>{
        return await this.actions.find(a=>a.name===action).run()
    }
}