export interface WidgetConstructor<T extends object> {
    new (attributes?:T,children?:Widget[]):Widget
}

export interface Widget {
    variant:string;
}

export const createWidget = <T extends WidgetConstructor<any>>(widget:T,attributes?:object,...children:Widget[])=>{
    if (attributes && children) return new widget(attributes,children)
    else if (attributes) return new widget(attributes)
    else if (children) return new widget(children)
}