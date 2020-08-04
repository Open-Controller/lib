import {Action,ActionSuccess} from "./Action"
import net from "net"
console.log(net)
export class TCPAction implements Action {
    host:string
    port:number
    name:string
    command:string
    variant="TCPAction"
    constructor({name,host,port,command}:{name:string,host:string,port:number,command:string}){
        this.name = name
        this.host = host
        this.port = port
        this.command = command
    }
    async run():Promise<ActionSuccess>{
        var client = net.createConnection({ port: this.port, host:this.host });
        client.on("connect", ()=> {
            client.write(`${this.command}\r\n`);
        });
        setTimeout(()=>client.destroy(),500)
        return {successful:true}
    }
    toJSON() {
        return {
            host:this.host,
            port:this.port,
            name:this.name,
            command:this.command,
            variant:this.variant
        }
    }
}