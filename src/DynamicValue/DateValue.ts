import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

export class DateValue implements DynamicValue<string> {
    variant="DateValue"
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
            variant:this.variant
        }
    }
    static fromJSON(_:any){
        return new DateValue()
    }
}