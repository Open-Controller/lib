import {Action,ActionSuccess} from "./Action"
import "isomorphic-fetch"
/**
 * HTTP method name strings
 */
export type Method = "GET"|"POST"|"PUT"|"DELETE"|"PATCH"
/**
 * An [[Action]] to send an HTTP request
 * 
 * @example
 * ```typescript
 * new HttpAction({
 *       name:"test",
 *       method:"GET",
 *       base:"https://jsonplaceholder.typicode.com/",
 *       path:"todos"
 *   })
 * ```
 */
export class HttpAction implements Action {
    method:Method
    url:string
    base:string
    path:string
    name:string|void
    __variant__="HttpAction"
    /**
     * @param base A base part of the URL
     * @param path The path added after the base
     */
    constructor({name,method,base,path}:{name?:string,method:Method,base:string,path:string}){
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
    static fromJSON(json:{name?:string,method:Method,base:string,path:string}){
        return new HttpAction({name:json.name,method:json.method,base:json.base,path:json.path})
    }
}