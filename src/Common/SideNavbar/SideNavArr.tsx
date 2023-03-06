import HomeIcon from "@mui/icons-material/Home";
import dashboardBlack from "../../Assets/images/home-black.svg";
import investorBlack from "../../Assets/images/investor-black.svg";
import startupBlack from "../../Assets/images/startup-black.svg";
import subscriptionBlack from "../../Assets/images/subscription-black.svg";
import usermanagementBlack from "../../Assets/images/user-management-black.svg";
import pagesBlack from "../../Assets/images/pages-black.svg";
import supportBlack from "../../Assets/images/support-ticket-black.svg";
import settingBlack from "../../Assets/images/setting-black.svg";
import dashboardOrange from "../../Assets/images/home-orange.svg";
import investorOrange from "../../Assets/images/investor-orange.svg";
import startupOrange from "../../Assets/images/startup-orange.svg";
import subscriptionOrange from "../../Assets/images/subscription-orange.svg";
import usermanagementOrange from "../../Assets/images/user-management-orange.svg";
import pagesOrange from "../../Assets/images/pages-orange.svg";
import supportOrange from "../../Assets/images/support-orange.svg";
import settingOrange from "../../Assets/images/setting-orange.svg";

export const SideNavArr = [
  {
    title: "Dashboard",
    icon: dashboardBlack,
    iconChange: dashboardOrange,
    // link: "/",
    link: "/",
  },
  {
    title: "Investors",
    icon: investorBlack,
    iconChange: investorOrange,
    link: "/investor-page",
  },
  {
    title: "Startups",
    icon: startupBlack,
    iconChange: startupOrange,
    link: "/startup-page",
  },
  // {
  //   title: "Subscription",
  //   icon: subscriptionBlack,
  //   iconChange: subscriptionOrange,
  //   link: "/subscription-page",
  // },
  {
    title: "User Management",
    icon: usermanagementBlack,
    iconChange: usermanagementOrange,
    link: "/user-management",
  },
  {
    title: "Pages",
    icon: pagesBlack,
    iconChange: pagesOrange,
    link: "/pages",
  },
  {
    title: "Support Tickets",
    icon: supportBlack,
    iconChange: supportOrange,
    link: "/support-tickets",
  },
  {
    title: "Settings",
    icon: settingBlack,
    iconChange: settingOrange,
    link: "/setting",
  },
];
