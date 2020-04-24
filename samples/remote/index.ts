import { Device,HttpAction,Macro,Remote,HLayout } from "../../src";

const main = async ()=>{
    const TVBase = "http://10.0.2.105:1234"
    const TV = new Device({name:"TV",actions:[
        new HttpAction({
            name:"on",
            method:"GET",
            base:TVBase,
            path:"/tvon"
        }),
        new HttpAction({
            name:"off",
            method:"GET",
            base:TVBase,
            path:"/tvoff"
        }),
    ]})

    const STBBase = "http://10.0.2.105:1234"
    const STB = new Device({name:"STB",actions:[
        new HttpAction({
            name:"on",
            method:"GET",
            base:STBBase,
            path:"/stbon"
        }),
        new HttpAction({
            name:"off",
            method:"GET",
            base:STBBase,
            path:"/stboff"
        }),
    ]})

    const fios = new Remote({name:"Fios",layout:[
        [
            null,
            null,
            new HLayout([
                new Macro({name:"on",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]})
            ])
        ]
    ]})

    console.log(fios)
}

main()