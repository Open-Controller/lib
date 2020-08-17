import { Action, ActionSuccess } from "../Action/Action";
import { ActionHolder } from "./ActionHolder";
import { DynamicValue } from "../DynamicValue";
import { DynamicValueHolder } from "./DynamicValueClient";

/**
 * Devices are a semantic and the recommended way of organizing [[Action]]s and [[DynamicValue]]s. 
 * They represent an external device and hold all of the actions and values associated with it.
 * 
 * @example
 * ```typescript
 * const device = new Device({
 *       name:"test",
 *       actions:[
 *           new HttpAction({
 *               name:"on",
 *               method:"GET",
 *               base:"http://device.ip/",
 *               path:"turnOn"
 *           })
 *       ]
 * })
 * device.run("on") //runs the HttpAction
 * device.getAction("on") //returns HttpAction {name:"on", method:"GET",base:"http://device.ip/",path:"turnOn",url:"http://device.ip/turnOn"}
 * ```
 */
export class Device implements ActionHolder, DynamicValueHolder{
    name:string
    actions:Action[]
    dynamicValues:DynamicValue<unknown>[]
    constructor({name,actions,dynamicValues=[]}:{name:string,actions:Action[],dynamicValues?:DynamicValue<unknown>[]}){
        this.name = name
        this.actions = actions
        this.dynamicValues = dynamicValues
    }
    async run(action:string):Promise<ActionSuccess>{
        return await this.getAction(action).run()
    }
    getAction(name:string):Action{
        return this.actions.find(a=>a.name===name)
    }
    getDynamicValue<T>(name:string):DynamicValue<T>{
        return this.dynamicValues.find(a=>a.name===name) as DynamicValue<T>
    }
}