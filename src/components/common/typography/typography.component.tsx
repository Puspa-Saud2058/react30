//component arguments/parameter data pass=>props
//children
//props are read only value

import { ReactElement } from "react";

// export const Heading1 = ({children}:any) => {  //1 ways 
    // export const Heading1 = ({props}:any) => { //2 ways
        // export const Heading1 = (props:any) => { //3ways
            export const Heading1 = ({value,className,children}:any) => {
        //receive
        //prepare
    return (
        <>
            {/* <h1 style={{ color: 'red' }}>{children}</h1>//using children as props */}
            {/* <h1 style={{ color: 'red' }}>{props.children}</h1> //using props.children */}
           {/* <h1 style={{ color: 'red' }}>{props.value}</h1> //for passing value */}
        <h1 className={`color:green ${className}`}>
            {value}
        </h1>
        </>
    );
};
