import React from "react";
import { Route, Routes } from "react-router";
import TopInvestorsList from "../../Components/DashboardComponent/TopInvestorsList";
import MoreDetails from "../../Components/MoreDetails/MoreDetails";
import { investorData } from "../../DB/MoreDetailsArray/MoreDetailsArray";
import data from "../../DB/TopInvestorsListArray/TopInvestorsListArray";
import Data from "../../DB/TotalUserCardQArray/SubscriptionCardArray";
import { UserSubscriptionDetailsdata } from "../../DB/UserSubsriptionDetailsArray/UserSubscriptionDetailsArray";
import AddAdminUserPage from "../../Pages/AddAdminUserPage/AddAdminUserPage";
import AddBlogPage from "../../Pages/AddBlogPage/AddBlogPage";
import AdminUserProfile from "../../Pages/AdminUserProfile/AdminUserProfile";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import EditBlogPage from "../../Pages/EditBlogPage/EditBlogPage";
import Editdetail from "../../Pages/EditDetails/Editdetail";
import EditDetails from "../../Pages/EditDetails/EditDetails";
import EditLoginImage from "../../Pages/EditLoginImage/EditLoginImage";
import EditPricingPlan from "../../Pages/EditPricingPlan/EditPricingPlan";
import ForgotPassword from "../../Pages/ForgotPassword/ForgotPassword";
import InvestorDetails from "../../Pages/InvestorDetailPage/InvestorDetailPage";
import InvestorPage from "../../Pages/InvestorPage/InvestorPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import NewPassword from "../../Pages/NewPassword/NewPassword";
import StartUpPage from "../../Pages/StartUpPage/StartUpPage";
import SubscritionPage from "../../Pages/SubscriptionPage/SubscritionPage";
import UserManagementPage from "../../Pages/UserManagementPage/UserManagementPage";
import UsersPage from "../../Pages/UsersPage/UsersPage";
import UserSubscriptionDetailsPage from "../../Pages/UserSubscriptionDetailsPage/UserSubscriptionDetailsPage";
import ViewTicketPage from "../../Pages/ViewTicketPage/ViewTicketPage";
import PrivateRoutes from "./PrivateRoutes";
import SupportTicketPage from "../../Pages/SupportTicketPage/SupportTicketPage";
import AddNewTestimonial from "../../Pages/AddNewTestimonial/AddNewTestimonial";
import EditTestimonial from "../../Pages/EditTestimonial/EditTestimonial";

const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/topinvestorlist"
          element={<TopInvestorsList TopInvestorsListprops={undefined} />}
        />

        <Route path="/pages" element={<UsersPage />} />
        <Route path="/subscription-page" element={<SubscritionPage />} />

        <Route path="/startup-page" element={<StartUpPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />

        <Route
          path="/investor-page/investor-details/:id"
          element={<InvestorDetails MoreDetail={investorData} />}
        />
        <Route
          path="/startup-page/more-details/:id"
          element={<MoreDetails MoreDetail={data} />}
        />
        <Route
          path="/subscription-page/more-details"
          element={
            <UserSubscriptionDetailsPage
              UserSubscriptionDetails={UserSubscriptionDetailsdata}
            />
          }
        />
        <Route path="/investor-page" element={<InvestorPage />} />
        <Route
          path="/user-management/edit-details/:id"
          element={<EditDetails EditDetail={Data} />}
        />
        <Route path="/editdetail" element={<Editdetail />} />
        <Route path="/add-user" element={<AddAdminUserPage />} />

        <Route path="edit-testimonial/:id" element={<EditTestimonial />} />
        <Route path="/support-tickets" element={<SupportTicketPage />} />
        <Route path="/addnewtestimonial" element={<AddNewTestimonial />} />

        <Route path="/edit-blog-page/:id" element={<EditBlogPage />} />
        <Route path="/add-blog-page" element={<AddBlogPage />} />
        <Route path="/view-ticket/:id" element={<ViewTicketPage />} />
        <Route path="/editpricingplan/:id" element={<EditPricingPlan />} />
        <Route path="/editloginimage/:id" element={<EditLoginImage />} />
        <Route path="/setting" element={<AdminUserProfile />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
    </Routes>
  );
};

export default Routing;
