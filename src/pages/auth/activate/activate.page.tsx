import { useEffect, useState } from "react";
import HomePageTitle from "../../../components/common/title/home-title.component";
import LoadingComponent from "../../../components/common/loading/loading.component";
import { useParams } from "react-router-dom";
import authSvc from "../auth.service";
import { Button } from "flowbite-react";
const ActivationPage = () => {
  const [loading, setLoading] = useState(true);
  let [msg, setMsg] = useState("");
  let [isExpired, setIsExpired] = useState(false);
  const params = useParams();

  const getVerified = async () => {
    try {
      const token = params.token;
       await authSvc.getRequest("/auth/activate/" + token);
      setMsg("Your account has been activated successfully.Please login to continue..")
    } catch (exception: any) {
      //handling
      if (
        +exception.status === 400 && exception.data.result && exception.data.result.hasOwnProperty('token') &&
        exception.data.result.token === "expired"
      )
       {
        setMsg(
          "Your token has been expired.Please confirm resending the token."
        );
        setIsExpired(true);
      }else{
        setMsg("Your account has been already activated.Please continue with login")
      }
    } finally {
      setLoading(false);
    }
  };
  const resendToken = async () => {
    try {
      setLoading(true);
      await authSvc.getRequest("/auth/resend-token/" + params.token);
      setMsg(
        "A new activation email has been sent to your registered email.Please check for the further process.");
      //setIsExpired(false);
    } catch (exception) {
      setMsg("There was an problem while sending you the activation email again.Please contact our admin for activation account." );
      //setIsExpired(false)
    } finally {
      setLoading(false)
      setIsExpired(false)
    }
  };
  useEffect(() => {
    getVerified();
  }, []);
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
        {loading ? (
          <>
            <div className="mx-3 md:mx-20 py-5 gap-2 mt-5 min-h-screen">
              <LoadingComponent size="xl" />
            </div>
          </>
        ) : (
          <>
            <div className="mx-3 md:mx-20 py-5 gap-2 mt-5 min-h-screen">
              {msg ? msg : <></>}
              {isExpired ? (
                <>
                  <div className="flex ">
                    <Button
                      onClick={resendToken}
                      className="w-[50%] bg-teal-800 mt-5"
                    >
                      Confirm Resending Activation Link
                    </Button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ActivationPage;
