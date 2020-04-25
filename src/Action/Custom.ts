import { Action, ActionSuccess } from "./Action";

export class Custom implements Action {
    action:Function
    name:string
    icon?:string
    constructor({name,icon,action}:{name:string,icon?:string,action:Function}){
        this.action = action
        this.name = name
        this.icon = icon
    }
    async run():Promise<ActionSuccess>{
        try{
            this.action()
            return {
                successful:true
            }
        }catch(err){
            return {
                successful:false
            }
        }
    }
}