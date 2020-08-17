import { Controller } from "../Controller";

/**
 * Rooms are a semantic organization unit for [[Controller]]s used in [[House]]s
 * @example
 * ```jsx
 * const device = new Device({
 *       name:"testDevice",
 *       actions:[
 *           new HttpAction({
 *               name:"on",
 *               method:"GET",
 *               base:"http://device.ip/",
 *               path:"turnOn"
 *           })
 *       ]
 * })
 * 
 * const controller = new Controller({
 *     name:"Test Controller",
 *     layout:[
 *       <Button action={device.getAction("on")} icon="power-on"/>
 *       //OR
 *       //new Button({
 *       //    action:device.getAction("on"),
 *       //    icon:"power-on"
 *       //})
 *    ]
 * })
 * 
 * new Room({name:"Test Room",controllers:[controller]})
 * ```
 */
export class Room {
    name:string
    controllers:Controller[]
    constructor({name,controllers}:{name:string,controllers:Controller[]}){
        this.name = name
        this.controllers = controllers
    }
    static fromJSON(json:any){
        return new Room({name:json.name,controllers:json.controllers.map(Controller.fromJSON)})
    }
}