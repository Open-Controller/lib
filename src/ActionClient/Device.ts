import { Action, ActionSuccess } from "../Action/Action";
import { ActionClient } from "./ActionClient";

/**
 * Devices are a semantic and the recommended way of organizing Actions. 
 * They represent an external device and hold all of the actions associated with it.
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
export class Device implements ActionClient{
    name:string
    actions:Action[]
    constructor({name,actions}:{name:string,actions:Action[]}){
        this.name = name
        this.actions = actions
    }
    async run(action:string):Promise<ActionSuccess>{
        return await this.getAction(action).run()
    }
    getAction(name:string):Action{
        return this.actions.find(a=>a.name===name)
    }
}