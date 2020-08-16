import { Action, ActionSuccess } from "./Action";

async function asyncForEach<T>(array:T[], callback:(item:T,index:number,array:T[])=>Promise<any>) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

export class Macro implements Action {
    actions:Action[]
    name:string
    __variant__="Macro"
    constructor({name,actions}:{name:string,actions:Action[]}){
        this.actions = actions
        this.name = name
    }
    async run():Promise<ActionSuccess>{
        await asyncForEach(this.actions,async (action:Action)=>await action.run())
        return {
            successful:true
        }
    }
    static fromJSON(json:{name:string,actions:any[]}){
        return new Macro({name:json.name,actions:json.actions.map(Action.fromJSON)})
    }
}