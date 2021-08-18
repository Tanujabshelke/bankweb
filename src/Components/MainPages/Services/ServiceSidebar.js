import React from "react";
import SidebarComponent from "../SidebarComponent";

const services = [
    { label: "Franking", value: "/services/" },
    { label: "Cheque Clearing", value: "/services/" },
    { label: "Demand Drafts", value: "/services/" },
    { label: "Adhar Based LPG Subsidy", value: "/services/" },
    { label: "Insurance", value: "/services/" },
    { label: "SMS Alert Facility", value: "/services/" },
    { label: "RUPAY Debit Card", value: "/services/" },
    { label: "POS", value: "/services/" },
    { label: "RTGS And NEFT", value: "/services/" },
    { label: "E-Tax Payment", value: "/services/" },
    { label: "Service Charges", value: "/services/" },
  ];

function ServiceSidebar(props) {
    const SideBarScreen = props;

    console.log("Props from ServiceSidebar :;",props);
  return (
    <div className="loan-sidebar" style={{ flex: 1 }}>
      <SidebarComponent
        data={services}
        Screen={SideBarScreen.mainScreenProps.Screen}
      />
    </div>
  );
}

export default ServiceSidebar;
