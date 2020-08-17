import { Room } from "../Room";

/**
 * Houses are the highest level objects in the library. They hold an array of [[Room]]s
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
 * const room = new Room({name:"Test Room",controllers:[controller]})
 * new House({name:"Test House",rooms:[room]})
 * ```
 */
export class House {
    name:string
    rooms:Room[]
    /**
     * @param name The display name of the House
     */
    constructor({name,rooms}:{name:string,rooms:Room[]}){
        this.name = name
        this.rooms = rooms
    }
    static fromJSON(json:any){
        return new House({name:json.name,rooms:json.rooms.map(Room.fromJSON)})
    }
}