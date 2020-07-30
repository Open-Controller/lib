import { Widget, WidgetConstructor } from "./Widget"

export class Blank implements Widget {
    variant="Blank"
}

const check:WidgetConstructor<{}> = Blank;