import { createContext, useEffect, useState } from "react";
import LoadingComponent from "../components/common/loading/loading.component";
import authSvc from "../pages/auth/auth.service";

let AuthContext=createContext({});

export const AuthProvider=({children}:{children:any})=>{
    let [loggedInUser,setLoggedInUser]=useState();
    let [loading,setLoading]=useState<boolean>();

    const getLoggedInUser=async()=>{
        setLoading(false);
        try{
          const response:any=await authSvc.getRequest("/auth/me",{auth:true});
          setLoggedInUser(response.result)
          setLoading(false)
        }catch(exception){
            //error
            console.log(exception)
        }
    }
    useEffect(()=>{
       const token=localStorage.getItem("_act")
       if(token){
          getLoggedInUser()
       }else{
        setLoading(false)
       }
    },[])
    return(
        <>
        <AuthContext.Provider value={{loggedInUser,setLoggedInUser}}>
            {
                loading?<>
                <div>
                <LoadingComponent className="flex justify-center justify-items-center" />
                </div>               
                </>:<>{children}</>
            }
        </AuthContext.Provider>
        </>
    )
}
export default AuthContext;