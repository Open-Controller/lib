import { Widget, WidgetConstructor } from "./Widget"
import { staticImplements } from "../../utils/staticImplements";

/**
 * A [[Widget]] that has no content and is to be displayed on the client as expanding to the maximum possible size
 * 
 * @example
 * ```jsx
 * new Blank()
 * //JSX
 * <Blank/>
 * ```
 */
@staticImplements<WidgetConstructor<never>>()
export class Blank implements Widget {
    __variant__="Blank"
    static fromJSON(_:any){
        return new Blank()
    }
}