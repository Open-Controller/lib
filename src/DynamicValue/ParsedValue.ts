import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

export class ParsedValue implements DynamicValue<unknown> {
    variant="ParsedValue"
    input:DynamicValue<string>
    unsubscribe:Unsubscriber
    listeners:Listener<unknown>[]=[]
    constructor({input}:{input:DynamicValue<string>}){
        this.input = input
        this.unsubscribe = input.onValue(val=> {
            this.listeners.forEach(l=>l(JSON.parse(val)))
        })
    }
    destroy(){
        this.unsubscribe()
    }
    onValue(listener:Listener<number>):Unsubscriber{
        this.listeners.push(listener)
        return ()=> {
            this.listeners = this.listeners.filter(l=>l!==listener)
        }
    }
}