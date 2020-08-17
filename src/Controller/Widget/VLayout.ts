import { Widget,WidgetConstructor } from "./Widget"
import { staticImplements } from "../../utils/staticImplements";

/**
 * A [[Widget]] that holds an array of Widgets to be displayed stacked vertically on the client
 * 
 * @example
 * ```jsx
 * new VLayout([
 *      new Blank(),
 *      new Blank(),
 *      new Blank()
 * ])
 * //JSX
 * <VLayout>
 *      <Blank/>
 *      <Blank/>
 *      <Blank/>
 * </VLayout>
 * ```
 */
@staticImplements<WidgetConstructor<never>>()
export class VLayout implements Widget {
    children:Widget[]
    __variant__="VLayout"
    constructor(children:Widget[]){
        this.children = children
    }
    static fromJSON(json: { children: any[]; }){
        return new VLayout(json.children.map(Widget.fromJSON));
    }
}