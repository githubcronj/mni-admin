import React from "react";
import investorImage from "../../Assets/images/investorImage.png"

interface Data {
    profile:string,
    name: string,
    role:string,
    emailId:string,
    status:string,
    action:string,
    remove:string

  }
  
function createData(
    profile:string,
    name: string,
    role:string,
    emailId:string,
    status:string,
    action:string,
    remove:string
  ): Data {
    return {
        profile,
        name,
        role,
        emailId,
        status,
        action,
        remove
    };
  }
  
  export const rows = [
    createData(investorImage , "Mitchell Williamson1" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson2" ,  "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson3" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson4" ,  "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson5" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson6" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson7" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson8" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson9" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson10" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson11" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson12" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson13" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson14" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson15" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson16" ,  "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson17" , "Admin" , "abcdekihd@gmail.com" ,  "Active" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson18" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson19" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson20" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson21" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson22" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson23" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson24" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson25" ,  "Premium" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson26" ,  "Premium" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson27" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson28" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson29" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson30" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson31" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson32" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson33" , "Super Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson34" , "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson35" ,  "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
    createData(investorImage , "Mitchell Williamson36" ,  "Admin" , "abcdekihd@gmail.com" ,  "Deactive" , "edit Details" , "Remove" ),
  ];
  


