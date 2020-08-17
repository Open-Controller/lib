import { Widget } from "./Widget/Widget";

/**
 * Controllers are the main unit of the library. They store an array of widgets that are to be displayed together on a client.
 * 
 * @example
 * ```typescript
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
 * new Controller({
 *     name:"Test Controller",
 *     layout:[
 *       new Button({
 *           action:device.getAction("on"),
 *           icon:"power-on"
 *      })
 *    ]
 * })
 * ```
 */
export class Controller {
    name:string
    layout:Widget[]
    /**
     * 
     * @param name The name of the Controller displayed in the client
     * @param layout An array of Widgets that will be displayed stacked or potentially wrapped on the client
     */
    constructor({name,layout}:{name:string,layout:Widget[]}){
        this.name = name
        this.layout = layout
    }
    static fromJSON(json:{name:string,layout:any[]}){
        return new Controller({
            name:json.name,
            layout:json.layout.map(widget=>Widget.fromJSON(widget))
        })
    }
}