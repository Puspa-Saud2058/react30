import { Table,Pagination } from "flowbite-react";
import { useState } from "react";
const BannerAdminTable=()=>{
  const [paginationData, setPaginationData] = useState({
    currentPage:1,
    totalpages:1
  });

  const onPageChange = (page: number) => {
    setPaginationData({
      ...paginationData,
      currentPage:page
    })
  }
    return(
        <>
            <div className="overflow-x-auto my-5">             
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        
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