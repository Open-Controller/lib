import {Action,ActionSuccess} from "./Action"
import { WSStore } from "./WSStore"
/**
 * @deprecated use TCPAction instead, because its sends the request directly from the device
 */
export class TelnetAction implements Action {
    wsAddress:string
    ws:WebSocket
    host:string
    port:number
    name:string
    command:string
    variant="TelnetAction"
    constructor({name,wsAddress,host,port,command}:{name:string,wsAddress:string,host:string,port:number,command:string}){
        this.name = name
        this.host = host
        this.port = port
        this.command = command
        this.wsAddress = wsAddress
        if (!WSStore.has(wsAddress)){
            WSStore.set(wsAddress,new WebSocket(wsAddress))
        }
        this.ws = WSStore.get(wsAddress)
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
        setTimeout(()=>this.ws.send(JSON.stringify({
            command: "close"
        })),500)
        return {successful:true}
    }
    toJSON() {
        return {
            wsAddress:this.wsAddress,
            host:this.host,
            port:this.port,
            name:this.name,
            command:this.command,
            variant:this.variant
        }
    }
    static fromJSON(json: { name: string; wsAddress: string; host: string; port: number; command: string }){
        return new TelnetAction({name:json.name,wsAddress:json.wsAddress,host:json.host,port:json.port,command:json.command})
    }
}