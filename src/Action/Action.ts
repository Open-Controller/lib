import { HttpAction, Macro, TelnetAction, DelayAction, TCPAction } from ".";

/**Stores the success of an [[Action]] */
export interface ActionSuccess {
    successful:boolean
}

/**Actions represent the calling of an external source without a return */
export interface Action {
    /**Metadata of the class name for parsing from a JSON */
    __variant__:string
    /**A unique identifier for an action within a [[Device]] */
    name:string|void
    /**Executes the task, returning a promise containing its success */
    run():Promise<ActionSuccess>
}

export class Action {
    /**Uses the __variant__ metadata to map a JSON object to a class */
    static fromJSON(json:any):Action{
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