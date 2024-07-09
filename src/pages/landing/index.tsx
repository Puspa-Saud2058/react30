import { Heading1} from "../../components/common/typography/typography.component";
import "./index.css";
let textCenter:any={textAlign:"center"};
import React, { Children } from "react"
const LandingPage=()=>{
    let name:string="puspa saud";
    let email:string="puspasaud09@gmail.com";
    let address:string="ktm";
    let phone:string="9845389095";
    return (
        <React.Fragment>
            {/* <h1 style={{...textCenter}}>{name}</h1> */}
              {/* <Heading1>Hello world</Heading1>  */}
            {/* <Heading1 value="Puspa Saud"></Heading1>  for passing value to props*/ }
          <Heading1 value="Puspa Saud"></Heading1>
        </React.Fragment>
    )
}

export default LandingPage