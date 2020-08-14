import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

export class DateValue implements DynamicValue<number> {
    variant="DateValue"
    listeners:Listener<number>[]=[]
    interval:number
    constructor(){
        this.interval = setInterval(()=>{
            this.listeners.forEach(l=>l(new Date().valueOf()))
        },1000)
    }
    destroy(){
        clearInterval(this.interval)
    }
    onValue(listener:Listener<number>):Unsubscriber{
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