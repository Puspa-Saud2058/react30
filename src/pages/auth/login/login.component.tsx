import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import *as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextInputComponent } from "../../../components/common/form/input.component";
import { INPUT_TYPE } from "../../../components/common/form/input.contract";
const LoginPage=()=>{
    const loginDTO=Yup.object({
        email: Yup.string().email({ tlds: { allow: ['com'] } }).required(),
        password:Yup.string().required()        
    });
    const {control,handleSubmit,formState:{errors}}=useForm({
      resolver:yupResolver(loginDTO)
    })
    const loginAction=(data:any)=>{
      //TODO:API CALL
      console.log(data);
    }
    return(
        <>
    
    <div className="flex justify-center items-center mt-16 ">
            <form onSubmit={handleSubmit(loginAction)} className="">
                <div className="w-full lg:w-96 md:w-64 sm:w-48 " >
                    <Label htmlFor="email1" value="Email" className="block mb-2" />
                    <TextInputComponent
                    control={control}
                    name="email"
                    type={INPUT_TYPE.EMAIL}
                    msg={errors?.email?.message}
                    />
                </div>
                <div className="w-full lg:w-96 md:w-64 sm:w-48 " >

                    <Label htmlFor="password1" value="Password" className="block mb-2 py-2" />
                    <TextInputComponent
                    control={control}
                    name="password"
                    type={INPUT_TYPE.PASSWORD}
                    msg={errors?.password?.message}
                                     
                    />
                 
                </div>
               
                <Button className="w-32 mt-3 mb-5" type="submit">Submit</Button>
            </form>
        </div>
        </>
    )
}
export default LoginPage