export interface ActionSuccess {
    successful:boolean
}

export interface Action {
    name:string
    run():Promise<ActionSuccess>
}