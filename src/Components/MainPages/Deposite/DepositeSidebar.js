import React from "react";
import SidebarComponent from "../SidebarComponent";

const deposite = [
  { label: "Savings Bank Account", value: "/deposite/" },
  { label: "Current Deposit Account", value: "/deposite/" },
  { label: "Fixed Deposit Account", value: "/deposite/" },
  { label: "Recurring Deposit Account", value: "/deposite/" },
];
function DepositeSidebar(props) {
  const SideBarScreen = props;
  console.log("Pros from DepositeSidebar::", props);
  return (
    <div className="sidebar" style={{ flex: 1 }}>
      <SidebarComponent
        data={deposite}
        Screen={SideBarScreen.mainScreenProps.Screen}
      />
    </div>
  );
}

export default DepositeSidebar;
