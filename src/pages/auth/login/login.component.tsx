import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import *as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const LoginPage=()=>{
    const loginDTO=Yup.object({
        email: Yup.string().email({ tlds: { allow: ['com'] } }).required(),
        password:Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/, "Password must contain one lowercase, one uppercase, one special character, and a digit and must be of length 8 to 25 characters"),
        
    });
    const {control,handleSubmit,formState:{errors}}=useForm({
      resolver:yupResolver(loginDTO)
    })
    const submitEvent=(data:any)=>{
      //TODO:API CALL
      console.log(data);
    }
    return(
        <>
    
    <form  onSubmit={handleSubmit(submitEvent)} className="flex max-w-md flex-col gap-4 mx-36">
      <div>
        <div className="mb-2 block ">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
        </>
    )
}
export default LoginPage