import React from "react";
import investorImage from "../../Assets/images/investorImage.png"

interface Data {
    name: string,
    profile: string,
    subscription:string,
    userId:string,
    industry:string,
    form:string,
    location:string,
    action:string,
    block:string
  }
  
function createData(
    name: string,
    profile: string,
    subscription:string,
    userId:string,
    industry:string,
    form:string,
    location:string,
    action:string,
    block:string
  ): Data {
    return {
        name,
        profile,
        subscription,
        userId,
        industry,
        form,
        location,
        action,
        block
    };
  }
  
  export const rows = [
    createData("Mitchell Williamson1" , investorImage , "Premium" , "#1" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson2" , investorImage , "Basic" , "#2" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson3" , investorImage , "Premium" , "#3" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson4" , investorImage , "Basic" , "#4" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson5" , investorImage , "Premium" , "#5" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson6" , investorImage , "Premium" , "#6" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson7" , investorImage , "Premium" , "#7" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson8" , investorImage , "Premium" , "#8" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson9" , investorImage , "Premium" , "#9" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson10" , investorImage , "Premium" , "#10" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson11" , investorImage , "Premium" , "#11" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson12" , investorImage , "Premium" , "#12" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson13" , investorImage , "Premium" , "#13" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson14" , investorImage , "Premium" , "#14" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson15" , investorImage , "Premium" , "#15" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson16" , investorImage , "Premium" , "#16" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson17" , investorImage ," Premium" , "#17" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson18" , investorImage ," Premium" , "#18" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson19" , investorImage ," Premium" , "#19" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson20" , investorImage ," Premium" , "#20" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson21" , investorImage ," Premium" , "#21" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson22" , investorImage ," Premium" , "#22" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson23" , investorImage ," Premium" , "#23" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson24" , investorImage ," Premium" , "#24" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson25" , investorImage , "Premium" , "#25" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson26" , investorImage , "Premium" , "#26" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson27" , investorImage ," Premium" , "#27" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson28" , investorImage ," Premium" , "#28" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson29" , investorImage ," Premium" , "#29" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson30" , investorImage ," Premium" , "#30" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson31" , investorImage ," Premium" , "#31" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson32" , investorImage ," Premium" , "#32" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson33" , investorImage ," Premium" , "#33" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson34" , investorImage ," Premium" , "#34" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson35" , investorImage , "Premium" , "#35" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
    createData("Mitchell Williamson36" , investorImage , "Premium" , "#36" , "Fintech" ,  "Private" , "Bangalore" , "More Details" , "block"),
  ];
  


