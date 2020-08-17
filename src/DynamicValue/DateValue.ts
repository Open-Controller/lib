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
    onValue(listener:Listener<string>):Unsubscriber{
        const interval = setInterval(()=>{
            listener(new Date().valueOf().toString())
        },1000)
        return ()=> {
            clearInterval(interval)
        }
    }
    toJSON(){
        return {
            __variant__:this.__variant__
        }
    }
    static fromJSON(_:any){
        return new DateValue()
    }
}