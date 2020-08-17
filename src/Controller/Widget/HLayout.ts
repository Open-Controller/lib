import { Widget, WidgetConstructor } from "./Widget"
import { staticImplements } from "../../utils/staticImplements";

/**
 * A [[Widget]] that holds an array of Widgets to be displayed in a horizontal row on the client
 * 
 * @example
 * ```jsx
 * new HLayout([
 *      new Blank(), new Blank(), new Blank()
 * ])
 * //JSX
 * <HLayout>
 *      <Blank/> <Blank/> <Blank/> 
 * </HLayout>
 * ```
 */
@staticImplements<WidgetConstructor<never>>()
export class HLayout implements Widget {
    children:Widget[]
    __variant__="HLayout"
    constructor(children:Widget[]){
        this.children = children
    }
    static fromJSON(json: { children: any[]; }){
        return new HLayout(json.children.map(Widget.fromJSON));
    }
}