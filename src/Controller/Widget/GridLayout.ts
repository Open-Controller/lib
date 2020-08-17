import { Widget, WidgetConstructor } from "./Widget"
import { staticImplements } from "../../utils/staticImplements";

/**
 * A [[Widget]] that holds Widgets and the amount of rows and columns, and is to be displayed as a grid on the client
 * 
 * @example
 * ```jsx
 * new GridLayout({width:2,height:3},[
 *     new Blank(), new Blank(),
 *     new Blank(), new Blank(),
 *     new Blank(), new Blank()
 * ])
 * //JSX
 * <GridLayout width={2} height={3}>
 *      <Blank/> <Blank/>
 *      <Blank/> <Blank/>
 *      <Blank/> <Blank/>
 * </GridLayout>
 * ```
 */
@staticImplements<WidgetConstructor<{height:number,width:number}>>()
export class GridLayout implements Widget {
    children:Widget[]
    height:number;
    width:number;
    __variant__="GridLayout"
    /**
     * 
     * @param height Number of rows
     * @param width Number of columns
     */
    constructor({height,width}:{height:number,width:number},children:Widget[]){
        this.children = children
        this.height = height
        this.width = width
    }
    static fromJSON(json: { height: number; width: number; children: any[]; }){
        return new GridLayout({height:json.height,width:json.width},json.children.map(Widget.fromJSON));
    }
}