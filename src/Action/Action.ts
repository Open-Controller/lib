import { HttpAction, Macro, TelnetAction, DelayAction } from ".";

export interface ActionSuccess {
    successful:boolean
}

export interface Action {
    variant:string
    name:string
    run():Promise<ActionSuccess>
}

export class Action {
    static fromJSON(json:any){
        switch (json.variant){
            case "HttpAction": 
                return new HttpAction({name:json.name,method:json.method,base:json.base,path:json.path});
            case "Macro": 
                return new Macro({name:json.name,actions:json.actions.map(Action.fromJSON)});
            case "TelnetAction": 
                return new TelnetAction({name:json.name,wsAddress:json.wsAddress,host:json.host,port:json.port,command:json.command});
            case "DelayAction":
                return new DelayAction({name:json.name,time:json.time})
        }
    }
}