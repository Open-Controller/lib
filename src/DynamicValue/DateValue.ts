import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] that contains the Unix time
 * 
 * @example
 * ```javascript
 * new DateValue()
 * ```
 */
export class DateValue implements DynamicValue<string> {
    __variant__="DateValue"
    name:string|void
    constructor(name?:string){
        this.name = name
    }
    onValue(listener:Listener<string>):Unsubscriber{
        const interval = setInterval(()=>{
            listener(new Date().valueOf().toString())
        },1000)
        return ()=> {
            clearInterval(interval)
        }
    }
    getValue(){
        return new Date().valueOf().toString()
    }
    static fromJSON(json:{name?:string}){
        return new DateValue(json.name)
    }
}