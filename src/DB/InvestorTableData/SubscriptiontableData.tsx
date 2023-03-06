import React from "react";
import investorImage from "../../Assets/images/investorImage.png"

interface Data {
    profile:string,
    name: string,
    subscription:string,
    userId:string,
    userType:string,
    status:string,
    action:string,
  }
  
function createData(
    profile:string,
    name: string,
    subscription:string,
    userId:string,
    userType:string,
    status:string,
    action:string,
  ): Data {
    return {
        profile,
        name,
        subscription,
        userId,
        userType,
        status,
        action,
    };
  }
  
  export const rows = [
    createData(investorImage , "Mitchell Williamson1" ,  "Premium" , "#1" , "Startup" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson2" ,  "Basic" , "#2" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson3" ,  "Premium" , "#3" , "Startup" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson4" ,  "Basic" , "#4" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson5" ,  "Premium" , "#5" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson6" ,  "Premium" , "#6" , "Startup" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson7" ,  "Premium" , "#7" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson8" ,  "Premium" , "#8" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson9" ,  "Premium" , "#9" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson10" ,  "Premium" , "#10" , "Startup" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson11" ,  "Premium" , "#11" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson12" ,  "Premium" , "#12" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson13" ,  "Premium" , "#13" , "Startup" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson14" ,  "Premium" , "#14" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson15" ,  "Premium" , "#15" , "Investor" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson16" ,  "Premium" , "#16" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson17" , " Premium" , "#17" , "Startup" ,  "Active" , "More Details" ),
    createData(investorImage , "Mitchell Williamson18" , " Premium" , "#18" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson19" , " Premium" , "#19" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson20" , " Premium" , "#20" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson21" , " Premium" , "#21" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson22" , " Premium" , "#22" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson23" , " Premium" , "#23" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson24" , " Premium" , "#24" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson25" ,  "Premium" , "#25" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson26" ,  "Premium" , "#26" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson27" , " Premium" , "#27" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson28" , " Premium" , "#28" , "Startup" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson29" , " Premium" , "#29" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson30" , " Premium" , "#30" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson31" , " Premium" , "#31" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson32" , " Premium" , "#32" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson33" , " Premium" , "#33" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson34" , " Premium" , "#34" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson35" ,  "Premium" , "#35" , "Investor" ,  "Deactive" , "More Details" ),
    createData(investorImage , "Mitchell Williamson36" ,  "Premium" , "#36" , "Investor" ,  "Deactive" , "More Details" ),
  ];
  


