import React from "react";
import SidebarComponent from "../SidebarComponent";



const loans = [
  { label: "General Loan", value: "/loan/" },
  { label: "Gold Loan", value: "/loan/goldLoan" },
  { label: "Housing Loan", value: "/loan/housingLoan" },
  { label: "Term Loan", value: "/loan/termLoan" },
  { label: "Cash Loan", value: "/loan/cashLoan" },
  { label: "Two Wheeler Loan", value: "/loan/twoWheelerLoan" },
  { label: "Commercial Loan", value: "/loan/commercialLoan" },
  { label: "Car Loan", value: "/loan/carLoan" },
  { label: "Old Vehical Loan", value: "/loan/oldVehicalLoan" },
  { label: "Education Loan", value: "/loan/" },
  { label: "Hypothication Loan", value: "/loan/" },
  { label: "Arthchakra Loan", value: "/loan/" },
  { label: "Parytan Loan", value: "/loan/" },
  { label: "Project Loan", value: "/loan/" },
  { label: "Consumer Durable Loan", value: "/loan/" },
  { label: "NSC Loan", value: "/loan/" },
];
function LoanSidebar1(props) {
  const  SideBarScreen = props;
  console.log("props from LoanSidebar1 ::",props);
  return (
    <div  style={{flex:1}}>
        <SidebarComponent data={loans} 
         Screen={SideBarScreen.mainScreenProps.Screen}
        />
    </div>
  );
}

export default LoanSidebar1;
