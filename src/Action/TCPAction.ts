import {Action,ActionSuccess} from "./Action"
import * as net from "net"

/**
 * An [[Action]] to send a TCP request
 * 
 * @example
 * ```typescript
 * new TCPAction({
 *       name:"test",
 *       host:"0.0.0.0",
 *       port:8124,
 *       command:"test"
 *   })
 * ```
 */
export class TCPAction implements Action {
    host:string
    port:number
    name:string
    command:string
    __variant__="TCPAction"
    /**
     * @param command the data sent to the TCP server
     */
    constructor({name,host,port,command}:{name:string,host:string,port:number,command:string}){
        this.name = name
        this.host = host
        this.port = port
        this.command = command
    }
    async run():Promise<ActionSuccess>{
        var client = net.createConnection({ port: this.port, host:this.host });
        client.on("error", (err)=> {
            console.log("TCP ERR",err)
            client.destroy()
        });
        client.on("connect", ()=> {
            client.write(`${this.command}\r\n`);
        });
        client.on("data", (data)=> {
            client.destroy()
        });
        setTimeout(()=>{
            client.destroy()
        },200)
        return {successful:true}
    }
    toJSON() {
        return {
            host:this.host,
            port:this.port,
            name:this.name,
            command:this.command,
            __variant__:this.__variant__
        }
    }
    static fromJSON(json: { name: string; host: string; port: number; command: string }){
        return new TCPAction({name:json.name,host:json.host,port:json.port,command:json.command});
    }
}