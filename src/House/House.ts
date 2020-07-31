import { Room } from "../Room";

export class House {
    name:string
    rooms:Room[]
    constructor({name,rooms}:{name:string,rooms:Room[]}){
        this.name = name
        this.rooms = rooms
    }
    static fromJSON(json:any){
        return new House({name:json.name,rooms:json.rooms.map(Room.fromJSON)})
    }
}