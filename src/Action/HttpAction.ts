import {Action,ActionSuccess} from "./Action"
import "isomorphic-fetch"
export type Method = "GET"|"POST"
export class HttpAction implements Action {
    method:Method
    url:string
    name:string
    icon?:string
    constructor({name,method,base,path,icon}:{name:string,method:Method,base:string,path:string,icon?:string}){
        this.method = method
        this.url = base+path
        this.name = name
        this.icon = icon
    }
    async run():Promise<ActionSuccess>{
        const response = await fetch(this.url,{method:this.method})
        return {successful:response.ok}
    }
}