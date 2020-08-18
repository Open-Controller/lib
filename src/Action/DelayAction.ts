import {Action,ActionSuccess} from "./Action"
/**An [[Action]] to delay execution, primarily used for a [[Macro]] 
 * 
 * @example
 * ```typescript
 * new DelayAction(1000,"wait")
 * ```
*/
export class DelayAction implements Action {
    time:number
    name:string|void
    __variant__="DelayAction"
    /**
     * @param time Time to delay for in milliseconds
     */
    constructor(time:number,name?:string){
        this.name = name
        this.time = time
    }
    async run():Promise<ActionSuccess>{
        await new Promise(r => setTimeout(r, this.time));
        return {successful:true}
    }
    static fromJSON(json: { name?: string; time: number }){
        return new DelayAction(json.time,json.name)
    }
}