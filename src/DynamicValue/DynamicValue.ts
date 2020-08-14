import { DateValue, ParsedValue } from ".";

export type Listener<T> = (value:T)=>void
export type Unsubscriber = ()=>void

//constructor(ARGS,reducer:Reducer)
export interface DynamicValue<T> {
    variant:string
    listeners:Listener<T>[]
    onValue:(listener:Listener<T>)=>Unsubscriber
    destroy:()=>void
}

export class DynamicValue<T> {
    static fromJSON(json:any){
        switch (json.variant){
            case "DateValue":
                return new DateValue()
            case "ParsedValue":
                return new ParsedValue({input:DynamicValue.fromJSON(json.input)})
        }
    }
}