import { expect,use } from "chai"
import chaiExclude from 'chai-exclude';

use(chaiExclude);
export const jsonTest = <
        T extends {new(...args:any):InstanceType<T>;
        fromJSON(json:any):InstanceType<T>}
    >(constructor:T,args:ConstructorParameters<T>,exclude?:string|string[])=>{
    return describe("#fromJSON()",()=>{
        it("should convert to the same thing",()=>{
            const object = new constructor(...args as any[])
            const clonedObject = constructor.fromJSON(JSON.parse(JSON.stringify(object)))
            expect(clonedObject).excludingEvery(exclude).to.deep.equal(object)
        })
    })
}