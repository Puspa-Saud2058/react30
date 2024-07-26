import { NavLink } from "react-router-dom";
import Desginer from "../../assests/image/Designer.jpeg"
const NoPermision = () => {
    return (
      <>
        <div className="grid h-screen place-content-center bg-white px-4">
          <div className="text-center">
            <img
               className="mx-auto h-96 text-black "
               src={Desginer}
               alt="No Permission"
            />
           
        
  
            <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </h1>
  
            <p className="mt-4 text-gray-500">You do not have permission to access this page</p>
            <p className="mt-5">
              <NavLink className="text-cyan-700" to="/">
                Go back to home page
              </NavLink>
            </p>
          </div>
        </div>
      </>
    );
  };
  export default NoPermision;
  