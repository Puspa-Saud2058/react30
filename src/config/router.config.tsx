import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing";
import RegisterPage from "../pages/auth/register/register.page";
import LoginPage from "../pages/auth/login";
import NotFound from "../pages/errors/not-found-page";
import CategoryDetailPage from "../pages/category/category-detail.page";
import HomePageLayout from "../pages/layouts/home-layout.page";
import AdminPageLayout from "../pages/layouts/admin-layout.page";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="category/:slug" element={<CategoryDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminPageLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
