import { Method } from "../utils/Method"
import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] that updates with the return of an HTTP request
 * 
 * @example
 * ```javascript
 * new HttpValue({
 *     name:"test",
 *     method:"GET",
 *     base:"https://jsonplaceholder.typicode.com/",
 *     path:"todos",
 *     interval:2000
 * })
 * ```
 */
export class HttpValue implements DynamicValue<string> {
    method:Method
    url:string
    base:string
    path:string
    name:string|void
    interval:number
    __variant__="HttpValue"
    /**
     * @param base A base part of the URL
     * @param path The path added after the base
     */
    constructor({name,method,base,path,interval}:{name?:string,method:Method,base:string,path:string,interval:number}){
        this.method = method
        this.base = base
        this.path = path
        this.url = base+path
        this.name = name
        this.interval = interval
    }
    onValue(listener:Listener<string>):Unsubscriber{
        const interval = setInterval(async ()=>{
            listener(await(await fetch(this.url,{method:this.method})).text())
        },this.interval)
        return ()=> {
            clearInterval(interval)
        }
    }
    async getValue(){
        return await(await fetch(this.url,{method:this.method})).text()
    }
    static fromJSON(json:{name?:string,method:Method,base:string,path:string,interval:number}){
        return new HttpValue({name:json.name,method:json.method,base:json.base,path:json.path,interval:json.interval})
    }
}