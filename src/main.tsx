import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/landing";
import "./assests/css/main.css";
import RouterConfig from "./config/router.config";
// import About from "./pages/About";
// import LoginPage from "./pages/login";
const rootElem=ReactDOM.createRoot(document.getElementById('root') as any);
rootElem.render(
<React.StrictMode>
  {/* <LandingPage></LandingPage> accept children component */}
  {/* <LandingPage/> doesn't accept children component */}
  {/* <LandingPage/> */}
  <RouterConfig/>
  {/* <About/>
  <LoginPage/> */}
  </React.StrictMode>


)