import { DynamicValue } from "../DynamicValue/DynamicValue";

/**
 * DynamicValueHolders are structures to organize [[DynamicValue]]s
 */
export interface DynamicValueHolder {
    /**Array of [[DynamicValue]]s stored */
    dynamicValues:DynamicValue<unknown>[]
    /**Gets an [[DynamicValue]] based on its name */
    getDynamicValue<T>(name:string):DynamicValue<T>
}