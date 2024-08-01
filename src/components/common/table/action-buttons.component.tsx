import { FaTrash,FaPen } from "react-icons/fa6"
const TableActionButton=()=>{
    const handleDelete=(e:any)=>{
        e.preventDefault()
    }
    return(
        <>
<a href="#" className="me-3 font-medium rounded-full h-8 w-8 bg-teal-600 text-white text-center p-2">
                <FaPen></FaPen>
              </a>
              <a href="#" className="me-3 font-medium rounded-full h-8 w-8 bg-red-600 text-white text-center p-2">
                <FaTrash></FaTrash>
              </a>
        </>
    )
}
export default TableActionButton;