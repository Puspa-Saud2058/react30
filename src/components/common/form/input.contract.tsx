import { BaseSyntheticEvent } from "react";

    //tel,range,............
export enum INPUT_TYPE{
    TEXT='text',
    NUMBER='number',
    EMAIL='email',
    PASSWORD='password',
    TEL='tel'

}
export type handleChangeType=(e:BaseSyntheticEvent)=>{}
export interface ITextInputComponent{
    type?:INPUT_TYPE,
    name:string,
    register:any,
    //handleChange:handleChangeType,
    msg?:string|undefined|null
}

