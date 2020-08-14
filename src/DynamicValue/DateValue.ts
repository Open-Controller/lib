import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

export class DateValue implements DynamicValue<string> {
    variant="DateValue"
    listeners:Listener<string>[]=[]
    interval:number
    constructor(){
        this.interval = setInterval(()=>{
            this.listeners.forEach(l=>l(new Date().valueOf().toString()))
        },1000)
    }
    destroy(){
        clearInterval(this.interval)
    }
    onValue(listener:Listener<string>):Unsubscriber{
        this.listeners.push(listener)
        return ()=> {
            this.listeners = this.listeners.filter(l=>l!==listener)
        }
    }
    toJSON(){
        return {
            variant:this.variant
        }
    }
}