import { Controller } from "../Controller";

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