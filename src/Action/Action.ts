import { HttpAction, Macro, TelnetAction, DelayAction, TCPAction } from ".";

export interface ActionSuccess {
    successful:boolean
}

export interface Action {
    __variant__:string
    name:string
    run():Promise<ActionSuccess>
}

export class Action {
    static fromJSON(json:any){
        switch (json.__variant__){
            case "HttpAction": 
                return HttpAction.fromJSON(json);
            case "Macro": 
                return Macro.fromJSON(json);
            /* istanbul ignore next */
            case "TelnetAction": 
                return TelnetAction.fromJSON(json);
            case "DelayAction":
                return DelayAction.fromJSON(json)
            case "TCPAction": 
                return TCPAction.fromJSON(json)
        }
    }
}