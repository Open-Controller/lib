import { Device } from "./ActionClient/Device";
import { HttpAction } from "./Action/HttpAction";
import { Macro } from "./Action/Macro";
import { Remote } from "./Remote/Remote";
import { HLayout } from "./Remote/LayoutGroup/HLayout";

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

    const fios = new Remote({name:"Fios",layout:{
        top:{
            left:null,
            center:null,
            right:new HLayout([
                new Macro({name:"on",actions:[
                    TV.getAction("on"),
                    STB.getAction("on")
                ]})
            ])
        },
        middle:{
            left:null,
            center:null,
            right:null
        },
        bottom:{
            left:null,
            center:null,
            right:null
        }
    }})

    console.log(fios)
}

main()