import {Action,ActionSuccess} from "./Action"
export class DelayAction implements Action {
    time:number
    name:string
    variant="DelayAction"
    constructor({name,time}:{name:string,time:number}){
        this.name = name
        this.time = time
    }
    async run():Promise<ActionSuccess>{
        await new Promise(r => setTimeout(r, this.time));
        return {successful:true}
    }
}