export interface ActionSuccess {
    successful:boolean
}

export interface Action {
    name:string
    icon?:string
    run():Promise<ActionSuccess>
}