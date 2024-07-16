import { Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate=useNavigate();
  const submitEvent=(data:any)=>{
    //api integration
    //response
      //success=>notify
      navigate("/admin")
  }
  return (
  <>
<Navigate to={"/login"}></Navigate>
  </>);
};
export default RegisterPage;
