import { Action, ActionSuccess } from "./Action";

/**@ignore */
async function asyncForEach<T>(array:T[], callback:(item:T,index:number,array:T[])=>Promise<any>) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
/**
 * An [[Action]] that combines multiple other Actions
 * 
 * @example
 * ```typescript
 * new Macro({
 *       name:"test",
 *       actions:[
 *           new DelayAction({name:"1",time:50}),
 *           new DelayAction({name:"2",time:500}),
 *       ]
 *   })
 * ```
 */
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