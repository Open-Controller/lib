/**@ignore */
export const staticImplements = <T>()=> {
    return <U extends T>(constructor: U) => {constructor};
}
