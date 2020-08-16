/* istanbul ignore file */

import { Action, ActionSuccess } from "./Action";

/** @deprecated cannot be converted into JSON */
export class Custom implements Action {
    action:Function
    name:string
    __variant__="Custom"
    constructor({name,action}:{name:string,action:Function}){
        this.action = action
        this.name = name
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