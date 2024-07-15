//component arguments/parameter data pass=>props
//children
//props are read only value

import { ReactElement } from "react";

interface HeadingProps{
    value:string|ReactElement,
    className?:string|null|undefined,
    children?:any
}

export const Heading1 = ({children}:any) => {  //1 ways 
    // export const Heading1 = ({props}:any) => { //2 ways
         //export const Heading1 = (props:any) => { //3ways
             //export const Heading1 = ({value,className,children}:any) => {
                //export const Heading1 = ({value,className,children}:HeadingProps) => {
        //receive
        //prepare
    return (
        <>
             <h1 style={{color:"black" ,fontWeight:"700",fontSize:"20px"}}>{children}</h1>
             {/* //using children as props   */}
            {/* <h1 style={{ color: 'red' }}>{props.children}</h1> //using props.children */}
            {/* <h1 style={{ color: 'red' }}>{props.value}</h1> //for passing value  */}
        {/* <h1 className={`color:green ${className}`}>
            {value}
        </h1> */}
        </>
    );
};
