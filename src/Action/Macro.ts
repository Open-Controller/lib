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
 * new Macro([
 *     new DelayAction({name:"1",time:50}),
 *     new DelayAction({name:"2",time:500}),
 * ],"test")
 * ```
 */
export class Macro implements Action {
    actions:Action[]
    name:string|void
    __variant__="Macro"
    constructor(actions:Action[],name?:string){
        this.actions = actions
        this.name = name
    }
    async run():Promise<ActionSuccess>{
        await asyncForEach(this.actions,async (action:Action)=>await action.run())
        return {
            successful:true
        }
    }
    static fromJSON(json:{name?:string,actions:any[]}){
        return new Macro(json.actions.map(Action.fromJSON),json.name)
    }
}