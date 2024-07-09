import "./index.css";
let textCenter:any={textAlign:"center"};
import React from "react"
const LandingPage=()=>{
    let name:string="puspa saud";
    let email:string="puspasaud09@gmail.com";
    let address:string="ktm";
    let phone:string="9845389095";
    return (
        <React.Fragment>
            {/* <h1 style={{...textCenter}}>{name}</h1> */}
            <h1 className="font-extrabold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[48px]">{name}</h1>
            <h2 style={textCenter}> {email}</h2>
            <em>{address}</em>
            <br/>
            <em>{phone}</em>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus delectus distinctio laboriosam inventore beatae iste error quisquam velit nulla.</p>
        <hr/>
        </React.Fragment>
    )
}

export default LandingPage