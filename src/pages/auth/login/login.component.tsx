import { Button, Label } from "flowbite-react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextInputComponent } from "../../../components/common/form/input.component";
import { INPUT_TYPE } from "../../../components/common/form/input.contract";
import { toast } from "react-toastify";
import authSvc from "../auth.service";
import { getCookie, setCookie } from "../../../utilities/helper";


const LoginPage = () => {
    
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
      const response = await authSvc.postRequest("auth/login", data);
      setCookie('_at',response.result.token.access,3)
      console.log(getCookie('_at'));
      //3 storage
       //cookie
         // string
            // time dependent
              //gets mature
                 //self delete
                   //eg.=>1 day >next deleted
             // dependent on path and domain
             //set maximum 50 cookie
             //4096 chars
           //document.cookie="name=value;expiresIn=timestamp;path=/admin;httpOnly=true;"

           //document.cookie="name=value;"; //session
           //data={};
           //cost cookie=document.cookie; //name=value;name2=value;
           // ; => =["name=value","name2=value"]=>= =>"name=value"=>["name","value"]=>data[name]=value;
       //localstorage
      //permanent
      //5 mb store
      //independent of path
      //localStorage.setItem('name','value')
      //localStorage.getItme("name")
      //localStorage.remoteItem("name")
      //localStorage.clear()
        //sessionstorage
      //sessionstorage.setItem('name','value')
      //sessionstorage.getItme("name")
      //sessionstorage.remoteItem("name")
      //sessionstorage.clear()
    } catch (exception) {
      console.error(exception);
      toast.error("Error while logging in your account!");
    }
  };
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
