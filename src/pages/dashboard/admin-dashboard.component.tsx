import { Card } from "flowbite-react";
import { BiShoppingBag } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import {FaUsers } from "react-icons/fa6";
const AdminDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="border-2 border-gray-300 rounded-lg dark:border-gray-600 ">
          <Card className="max-w-sm bg-red-800">
            <h5 className=" flex text-2xl justify-between font-bold tracking-tight text-white">
            Customers <FaUsers>  </FaUsers>
            </h5>
            <strong className="text-3xl text-white">
              1000
            </strong>
          </Card>
        </div>
        <div className="border-2 border-gray-300 rounded-lg dark:border-gray-600 ">
          <Card className="max-w-sm bg-yellow-800">
            <h5 className=" flex text-2xl justify-between font-bold tracking-tight text-white">
            Products <FaShoppingBag/>
            </h5>
            <strong className="text-3xl text-white">
              1000
            </strong>
          </Card>
        </div>
        <div className="border-2 border-gray-300 rounded-lg dark:border-gray-600 ">
          <Card className="max-w-sm bg-red-800">
            <h5 className=" flex text-2xl justify-between font-bold tracking-tight text-white">
            Income <FaUsers>  </FaUsers>
            </h5>
            <strong className="text-3xl text-white">
             {
              new Intl.NumberFormat("np",{style:'currency',currency:"NPR"}).format(98356)
             }
            </strong>
          </Card>
        </div>
        <div className="border-2 border-gray-300 rounded-lg dark:border-gray-600 ">
          <Card className="max-w-sm bg-teal-800">
            <h5 className=" flex text-2xl justify-between font-bold tracking-tight text-white">
            New Orders <FaUsers>  </FaUsers>
            </h5>
            <strong className="text-3xl text-white">
              10
            </strong>
          </Card>
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600  "></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 "></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600  "></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
      </div>
    </>
  );
};
export default AdminDashboard;
