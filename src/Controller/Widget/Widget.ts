export interface Widget {
    variant:string
}

export interface WidgetConstructor {
    new (attributes?:object,children?:Widget[])
}

export const createWidget = <T extends WidgetConstructor>(widget:T,attributes?:object,...children:Widget[])=>{
    if (attributes && children) return new widget(attributes,children)
    else if (attributes) return new widget(attributes)
    else if (children) return new widget(children)
}