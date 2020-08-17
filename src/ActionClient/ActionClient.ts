import { ActionSuccess, Action } from "../Action/Action";

/**
 * ActionClients are structures to organize [[Action]]s into
 */
export interface ActionClient {
    /**Array of [[Action]]s stored */
    actions:Action[]
    /**Runs an [[Action]] based on its name */
    run(action:string):Promise<ActionSuccess>
    /**Gets an [[Action]] based on its name */
    getAction(name:string):Action
}