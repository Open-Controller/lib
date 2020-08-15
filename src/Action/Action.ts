import { HttpAction, Macro, TelnetAction, DelayAction, TCPAction } from ".";

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
                return HttpAction.fromJSON(json);
            case "Macro": 
                return Macro.fromJSON(json);
            case "TelnetAction": 
                return TelnetAction.fromJSON(json);
            case "DelayAction":
                return DelayAction.fromJSON(json)
            case "TCPAction": 
                return TCPAction.fromJSON(json)
        }
    }
}