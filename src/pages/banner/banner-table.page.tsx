import { Table,Pagination,TextInput } from "flowbite-react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TableRowSkeleton } from "../../components/common/table/skeleton.component";


const BannerAdminTable=()=>{
  const [paginationData, setPaginationData] = useState({
    currentPage:1,
    totalpages:1
  });

  const [banner,setBanner]=useState<any>();
  const [loading,setLoading]=useState<boolean>(true);

  const onPageChange = (page: number) => {
    setPaginationData({
      ...paginationData,
      currentPage:page
    })
  }
    return(
        <>
            <div className="overflow-x-auto my-5">    
              <div className="flex overflow-x-auto sm:justify-end my-5">
              <TextInput id="email4" type="email" rightIcon={FaSearch} placeholder="search" required className="w-1/4" />
                </div> 

      <Table hoverable>
        <Table.Head >
          <Table.HeadCell className="bg-slate-800 text-white py-3">Title</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 text-white py-3">Link</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 text-white py-3">Status</Table.HeadCell>
          <Table.HeadCell className="bg-slate-800 text-white py-3">Image</Table.HeadCell>
          <Table.HeadCell>
            Actions
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
         {
          loading?<>
        <TableRowSkeleton rows={5} cols={5}/>
          </>:(
            banner ?<>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
   
             </div>
            </Table.Cell>
            <Table.Cell>
            <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
   
             </div>
            </Table.Cell>
            <Table.Cell> <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
   
             </div></Table.Cell>
            <Table.Cell> <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
   
             </div></Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
               
          </>:<>
          Add some data
          </>
          )
         }
        
        </Table.Body>
      </Table>

      <div className="flex overflow-x-auto sm:justify-end">
      <Pagination currentPage={paginationData.currentPage} totalPages={paginationData.totalpages} onPageChange={onPageChange} />
    </div>
    </div>
        </>
    )
}
export default BannerAdminTable;