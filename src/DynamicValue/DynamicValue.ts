import { DateValue, ParsedValue, TextValue } from ".";

/**
 * A callback for a [[DynamicValue]]
 */
export type Listener<T> = (value:T)=>void
/**
 * A function to unsubscribe from a [[DynamicValue]]
 */
export type Unsubscriber = ()=>void

/**
 * A DynamicValue holds a value that can potentially change and is observable
 * @template T The type of the value that is held
 */
export interface DynamicValue<T> {
    /**Metadata holding the class name of the DynamicValue, so it can be mapped back to the class from a JSON */
    __variant__:string
    name:string|void
    /**A function to subscribe to the value that is held by the DynamicValue*/
    onValue:(listener:Listener<T>)=>Unsubscriber
}

export class DynamicValue<T> {
    /**
     * Maps a JSON object to an instance of its class
     */
    static fromJSON(json:any){
        switch (json.__variant__){
            case "DateValue":
                return DateValue.fromJSON(json)
            case "ParsedValue":
                return ParsedValue.fromJSON(json)
            case "TextValue":
                return TextValue.fromJSON(json)
        }
    }
}