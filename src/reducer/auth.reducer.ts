import { createSlice } from "@reduxjs/toolkit";

const UserSlicer=createSlice({
    name:"User",
    initialState:{
        loggedInUser:null
    },
    reducers:{
        setLoggedInUser:(state,action)=>{
            state.loggedInUser=action.payload
            //action:{type:"",payload:any}
              //type:"User/setLoggedInUser"
                //payload:args
            //state:loggedInUser    
        }
    }
})

export const{setLoggedInUser}=UserSlicer.actions
export default UserSlicer.reducer;