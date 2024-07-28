import { NavLink } from "react-router-dom"
import { FaPlus } from "react-icons/fa6"
import { Table } from "flowbite-react"
const AdminBannerList=()=>{
    return(
        <>
        <div className="my-5 border-b border-spacing-10 border-gray-700 flex justify-between">
            <h1 className="text-3xl font-semibold py-3">
                Banner List Page
            </h1>
            <NavLink to={'admin/banner/create'} className={"flex text-center  bg-teal-700 px-5 py-3 text-white rounded-md mb-3"}>
             <FaPlus /> Add Banner
            </NavLink>
        </div>
    
        </>
    )
}
export default AdminBannerList