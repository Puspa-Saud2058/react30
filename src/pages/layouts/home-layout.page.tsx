import { Outlet } from "react-router-dom"
import HomeFooter from "../../components/common/footer/footer"
import Navbars from "../../components/common/navbar/navbar.component"
const HomePageLayout=()=>{
    return(
        <>
        <div className="py-5 bg-cyan-100 ">
            <p className="px-10 mx-0 md:mx-6 lg:mx-10 xl:mx-16">
            Over the purchase of Npr.100, <span className="text-cyan-800 font-bold">Free Delivery</span>
            </p>
         
        </div>
       <Navbars/>
       <Outlet/>
      
        <HomeFooter/>
        </>
    )
}

export default HomePageLayout