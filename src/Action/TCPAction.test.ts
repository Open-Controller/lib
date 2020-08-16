import { describe,it } from "mocha"
import { expect } from "chai"
import { jsonTest } from "../utils/jsonTest"
import { TCPAction } from "./TCPAction"
import * as net from "net"

describe("TCPAction",()=>{
    let server:net.Server;
    before(()=>{
        server = net.createServer((c) => {
            // 'connection' listener.
            console.log('client connected');
            c.on('end', () => {
              console.log('client disconnected');
            });
            c.on("data",(data)=>{
                console.log(data.toString())
                c.write("test\r\n");
                c.pipe(c);
            })
        });
        server.on('error', (err) => {
            throw err;
        });
        server.listen(8124, () => {
            console.log('server bound');
        });
    })
    describe("#run()",()=>{
        it("should fetch",async ()=>{
            const action = new TCPAction({
                name:"test",
                host:"0.0.0.0",
                port:8124,
                command:"test"
            })
            const {successful} = await action.run()
            expect(successful).to.equal(true)
        })
        it("should handle error",async ()=>{
            server.close()
            const action = new TCPAction({
                name:"test",
                host:"0.0.0.0",
                port:8124,
                command:"test"
            })
            const {successful} = await action.run()
            expect(successful).to.equal(true)
        })
    })
    jsonTest(TCPAction,[{
        name:"test",
        host:"0.0.0.0",
        port:8124,
        command:"test"
    }])
    after(()=>{
        server.close()
    })
})