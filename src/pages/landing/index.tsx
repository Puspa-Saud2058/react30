import { Heading1} from "../../components/common/typography/typography.component";
import "./index.css";
let textCenter:any={textAlign:"center"};

import Navbars from "../../components/common/navbar/navbar.component";
import React, { Children } from "react"
import { HomePageBanner } from "../../components/banner/banner.component";
const LandingPage=()=>{
    let name:string="puspa saud";
    let email:string="puspasaud09@gmail.com";
    let address:string="ktm";
    let phone:string="9845389095";
    return (
        // <React.Fragment>
        //     {/* <h1 style={{...textCenter}}>{name}</h1> */}
        //       {/* <Heading1>Hello world</Heading1>  */}
        //     {/* <Heading1 value="Puspa Saud"></Heading1>  for passing value to props*/ }
        //   <Heading1 value="Puspa Saud"></Heading1>
        //   <Heading1 className={'text-teal-600 text-center'} value={name}></Heading1>
        
        // </React.Fragment>
          <>
      <Navbars/>
      <HomePageBanner/>

       </>
    )
}

export default LandingPage