import {Action,ActionSuccess} from "./Action"
export class TelnetAction implements Action {
    ws:WebSocket
    host:string
    port:number
    name:string
    command:string
    icon?:string
    constructor({name,ws,host,port,command,icon}:{name:string,ws:WebSocket,host:string,port:number,command:string,icon?:string}){
        this.name = name
        this.ws = ws
        this.host = host
        this.port = port
        this.command = command
        this.icon = icon
    }
    async run():Promise<ActionSuccess>{
        this.ws.send(JSON.stringify({
            command: "connect",
            host: this.host,
            port: this.port
        }))
        this.ws.send(JSON.stringify({
            command: "send",
            data: `${this.command}\r\n`
        }))
        return {successful:true}
    }
}