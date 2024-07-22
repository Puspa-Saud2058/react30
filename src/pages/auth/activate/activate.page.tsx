import { useState } from "react";
import HomePageTitle from "../../../components/common/title/home-title.component";
import LoadingComponent from "../../../components/common/loading/loading.component";
const ActivationPage = () => {
  const [loading, setLoading] = useState(true);
  //token url=>read
  //api call/auth/activate/token
  //success
  //fail
  //token expire
  //resend
  //error
  //error msg
  //End
  return (
    <>
      <HomePageTitle title="Activate your account" />
      <div className="mx-3 md:mx-20 py-5 gap-2 mt-5 min-h-screen">
        {
            loading?<>
            <div className="text-center items-center justify-center">
            <LoadingComponent size="xl"/>
            </div>           
            </>:<></>
        }
      </div>
    </>
  );
};
export default ActivationPage;
