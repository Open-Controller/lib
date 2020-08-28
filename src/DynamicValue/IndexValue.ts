import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

/**
 * A [[DynamicValue]] reducer returning the value at an index
 * 
 * @example
 * ```javascript
 * new IndexValue(new SplitValue(new TextValue("a,b,c"),","),0).onValue(val=>
 *  val === "a" //true
 * )
 * ```
 */
export class IndexValue<V> implements DynamicValue<V> {
    __variant__="IndexValue"
    input:DynamicValue<any[]>
    name:string|void
    index:string|number
    constructor(input:DynamicValue<any[]>,index:string|number,name?:string){
        this.input = input
        this.index = index
        this.name = name
    }
    onValue(listener:Listener<V>):Unsubscriber{
        const unsubscribe = this.input.onValue(val=> {
            listener(val[this.index])
        })
        return ()=> {
            unsubscribe()
        }
    }
    async getValue(){
        return (await this.input.getValue())[this.index]
    }
    static fromJSON(json: { input: any, index:string|number, name?:string }){
        return new IndexValue(DynamicValue.fromJSON(json.input),json.index,json.name)
    }
}