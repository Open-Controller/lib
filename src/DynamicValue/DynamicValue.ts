import { DateValue, ParsedValue, TextValue } from ".";

export type Listener<T> = (value:T)=>void
export type Unsubscriber = ()=>void

//constructor(ARGS,reducer:Reducer)
export interface DynamicValue<T> {
    variant:string
    onValue:(listener:Listener<T>)=>Unsubscriber
}

export class DynamicValue<T> {
    static fromJSON(json:any){
        switch (json.variant){
            case "DateValue":
                return DateValue.fromJSON(json)
            case "ParsedValue":
                return ParsedValue.fromJSON(json)
            case "TextValue":
                return TextValue.fromJSON(json)
        }
    }
}