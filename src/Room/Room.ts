import { Controller } from "../Controller";

export class Room {
    name:string
    controllers:Controller[]
    constructor({name,controllers}:{name:string,controllers:Controller[]}){
        this.name = name
        this.controllers = controllers
    }
}