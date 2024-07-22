import axios from "axios";
//http://localhost:9005/
//auth/register./auth/login
const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    timeout:60000,
    timeoutErrorMessage:"Server timed out",
    headers:{
        "Content-Type":"application/json"
    }
    //maxBodyLength:filesize
    //maxRate=continous hits on submit button that is continious request to the server burustforce
    //detosx =>halt user for maximum conitinously hits
    //method:"GET,POST,PUT,PATCH,DELETE"
    //CRA template use=>
    //baseURL:process.env.REACT_APP_API_URL
});
//TODO 
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Success Interceptor",response)
        return response;
    },
    (exception)=>{
        console.log("Error Interceptor",exception)
        throw exception
    }
)

export default axiosInstance