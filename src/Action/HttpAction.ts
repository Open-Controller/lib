import {Action,ActionSuccess} from "./Action"
import "isomorphic-fetch"
export type Method = "GET"|"POST"
export class HttpAction implements Action {
    method:Method
    url:string
    base:string
    path:string
    name:string
    __variant__="HttpAction"
    constructor({name,method,base,path}:{name:string,method:Method,base:string,path:string}){
        this.method = method
        this.base = base
        this.path = path
        this.url = base+path
        this.name = name
    }
    async run():Promise<ActionSuccess>{
        const response = await fetch(this.url,{method:this.method})
        return {successful:response.ok}
    }
    static fromJSON(json:{name:string,method:Method,base:string,path:string}){
        return new HttpAction({name:json.name,method:json.method,base:json.base,path:json.path})
    }
}