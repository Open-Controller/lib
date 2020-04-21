import { ActionSuccess, Action } from "../Action/Action";

export interface ActionClient {
    run(action:string):Promise<ActionSuccess>
}