import {Action,ActionSuccess} from "./Action"
/**An Action to delay execution, primarily used for a [[Macro]] 
 * 
 * ### Example usage:
 * 
 * ```typescript
 * new DelayAction({name:"wait",time:1000})
 * ```
*/
export class DelayAction implements Action {
    time:number
    name:string
    __variant__="DelayAction"
    /**
     * @param time Time to delay for in milliseconds
     */
    constructor({name,time}:{name:string,time:number}){
        this.name = name
        this.time = time
    }
    async run():Promise<ActionSuccess>{
        await new Promise(r => setTimeout(r, this.time));
        return {successful:true}
    }
    static fromJSON(json: { name: string; time: number }){
        return new DelayAction({name:json.name,time:json.time})
    }
}