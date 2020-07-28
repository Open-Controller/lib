import { Device,HttpAction,Macro,Controller,HLayout, VLayout, createWidget as c } from "../../src";
import { Button } from "../../src/Controller/Widget/Button";
import htm from 'htm'
import { Blank } from "../../src/Controller/Widget/Blank";
const xml = htm.bind(c);

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

    // const fios = new Controller({name:"Fios",layout:[
    //     new VLayout([
    //         null,
    //         null,
    //         new HLayout([
    //             new Macro({name:"on",actions:[
    //                 TV.getAction("on"),
    //                 STB.getAction("on")
    //             ]})
    //         ])
    //     ])
    // ]})

    const fios2 = new Controller({name:"Fios",layout:[
        c(VLayout,null,
            c(Blank),
            c(Blank),
            c(HLayout,null,
                c(Button,{
                    action: new Macro({name:"on",actions:[
                        TV.getAction("on"),
                        STB.getAction("on")
                    ]})
                })
            )
        )
    ]})

    const fios3 = new Controller({name:"Fios",layout:[
        xml`
            <${VLayout}>
                <${Blank}/>
                <${Blank}/>
                <${HLayout}>
                    <${Button} action=${new Macro({name:"on",actions:[
                        TV.getAction("on"),
                        STB.getAction("on")
                    ]})}/>
                </${HLayout}>
            </${VLayout}>
        `
    ]})

    console.log(JSON.stringify(fios3,null,2))
}

main()