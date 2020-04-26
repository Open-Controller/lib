import { Room } from "../Room";

export class House {
    name:string
    rooms:Room[]
    constructor({name,rooms}:{name:string,rooms:Room[]}){
        this.name = name
        this.rooms = rooms
    }
}