import { Button, Label } from "flowbite-react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextInputComponent } from "../../../components/common/form/input.component";
import { INPUT_TYPE } from "../../../components/common/form/input.contract";
import { toast } from "react-toastify";
import authSvc from "../auth.service";
// import { getCookie, setCookie } from "../../../utilities/helper";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../../../context/auth.context";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../../reducer/auth.reducer";
import { useLoginMutation } from "../auth.Api";


const LoginPage = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
 
    const [login,{isLoading}]=useLoginMutation();
    
   
    const auth:any=useContext(AuthContext)

  const loginDTO = Yup.object({
    email: Yup.string()
      .email({ tlds: { allow: ["com"] } })
      .required(),
    password: Yup.string().required(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginDTO),
  });
  const loginAction = async (data: any) => {
    try {
      const response=await login(data).unwrap();
      
      // const response = await authSvc.postRequest("auth/login", data);
       localStorage.setItem("_act",response.result.token.access)
       localStorage.setItem("_rft",response.result.token.refresh)
       toast.success("Welcome to "+response.result.userDetail.role+" panel !")
       auth.setLoggedInUser(response.result.userDetail);
       dispatch(setLoggedInUser(response.result.userDetail));
       navigate("/"+response.result.userDetail.role)

    } catch (exception) {
      console.error(exception);
      toast.error("Error while logging in your account!");
    }
  };
useEffect(()=>{
   if(auth.loggedInUser){
    toast.info("Your are already loggedIn.")
    navigate("/"+auth.loggedInUser.role)
   }
},[auth])
  return (
    <>
      <div className="flex justify-center items-center mt-16 ">
        <form onSubmit={handleSubmit(loginAction)} className="">
          <div className="w-full lg:w-96 md:w-64 sm:w-48 ">
            <Label htmlFor="email1" value="Email" className="block mb-2" />
            <TextInputComponent
              control={control}
              name="email"
              type={INPUT_TYPE.EMAIL}
              msg={errors?.email?.message}
            />
          </div>
          <div className="w-full lg:w-96 md:w-64 sm:w-48 ">
            <Label
              htmlFor="password1"
              value="Password"
              className="block mb-2 py-2"
            />
            <TextInputComponent
              control={control}
              name="password"
              type={INPUT_TYPE.PASSWORD}
              msg={errors?.password?.message}
            />
          </div>
          <Button className="w-32 mt-3 mb-5" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
