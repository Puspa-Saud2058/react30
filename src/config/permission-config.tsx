import { useContext, useEffect, useState } from "react";
import LoadingComponent from "../components/common/loading/loading.component";
import AuthContext from "../context/auth.context";
import NoPermision from "../pages/errors/no-permission.page";
const AllowUser = ({allowUser,children}: {allowUser: string;children: any}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [giveAccess, setAccess] = useState<boolean>(false);

  const auth:any = useContext(AuthContext);
  useEffect(() => {
    if (auth.loggedInUser) {
       if (allowUser === auth.loggedInUser.role) {
        setAccess(true);
      } else {
        setAccess(false);
      }
      setLoading(false)
    }else{
      setLoading(false)
    }
  }, [auth]);
  return(
    <>{
      loading?<>
      <LoadingComponent/>
      </>:<>{
          giveAccess?<>{children}</>:<>
          <NoPermision/>
          </>
      }
      </>
    }
    </> )
  
}
export default AllowUser;