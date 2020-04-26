import { Remote } from "../Remote";

export class Room {
    name:string
    remotes:Remote[]
    constructor({name,remotes}:{name:string,remotes:Remote[]}){
        this.name = name
        this.remotes = remotes
    }
}