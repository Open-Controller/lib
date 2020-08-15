import { expect } from "chai"

export const jsonTest = <T extends {new(...args:any):InstanceType<T>;fromJSON(json:any):InstanceType<T>}>(constructor:T,args:ConstructorParameters<T>)=>{
    return describe("#fromJSON()",()=>{
        it("should convert to the same thing",()=>{
            const object = new constructor(...args as any[])
            const clonedObject = constructor.fromJSON(JSON.parse(JSON.stringify(object)))
            expect(clonedObject).to.deep.equal(object)
        })
    })
}