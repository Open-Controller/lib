import { Widget, WidgetConstructor } from "./Widget"
import { staticImplements } from "../../utils/staticImplements"

/**
 * A [[Widget]] that stores 5 Widgets to be displayed on the client in a 4-branch format:
 * ```
 *       top
 * left center right
 *      bottom
 * ```
 * 
 * @example
 * ```jsx
 * new ArrowLayout({
 *     left:new Blank(),
 *     right:new Blank(),
 *     center:new Blank(),
 *     top:new Blank(),
 *     bottom:new Blank(),
 * })
 * //JSX
 * <ArrowLayout left={<Blank/>} right={<Blank/>} center={<Blank/>} top={<Blank/>} bottom={<Blank/>}>
 * ```
 */

@staticImplements<WidgetConstructor<{
    left:Widget,
    right:Widget,
    center:Widget,
    top:Widget,
    bottom:Widget
}>>()
export class ArrowLayout implements Widget {
    left:Widget
    right:Widget
    center:Widget
    top:Widget
    bottom:Widget
    __variant__="ArrowLayout"
    constructor({left,right,top,bottom,center}:{
        left:Widget
        right:Widget
        center:Widget
        top:Widget
        bottom:Widget
    }){
        this.left = left
        this.right = right
        this.center = center
        this.top = top
        this.bottom = bottom
    }
    static fromJSON(json: { left: any; right: any; top: any; bottom: any; center: any }){
        return new ArrowLayout({left:Widget.fromJSON(json.left),right:Widget.fromJSON(json.right),top:Widget.fromJSON(json.top),bottom:Widget.fromJSON(json.bottom),center:Widget.fromJSON(json.center)});
    }
}