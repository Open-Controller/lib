import { HttpAction, Macro, TelnetAction } from ".";

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
            // FIXME: readd
            // case "TelnetAction": 
            //     return new TelnetAction({name:json.name,});
        }
    }
}