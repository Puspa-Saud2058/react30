import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "../pages/landing"
import RegisterPage from "../pages/auth/register/register.page"
import LoginPage from "../pages/auth/login"
import NotFound from "../pages/errors/not-found-page"

const RouterConfig=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<LandingPage/>}> </Route>
        <Route path="/register" element={<RegisterPage/>}> </Route>
        <Route path="/login" element={<LoginPage/>}> </Route>
        <Route path="*" element={<NotFound/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default RouterConfig