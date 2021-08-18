import React from 'react'
import SidebarComponent from '../SidebarComponent'

const otherLinks = [
    { label: "Gallery" , value:"/otherLinks"},
    { label: "Know your customer(KYC)", value: "/otherLinks/" },
    { label: "Unclaimed Deposite Transfered to DEAF", value: "/otherLinks/" },
    { label: "Annual Report", value: "/otherLinks/" },
  ];

function OtherLinkSidebar(props) {
    const SideBarScreen = props;
    console.log("Props from OtherLinks::",props);
    return (
        <div style={{flex:1}}>
        <SidebarComponent data={otherLinks} 
         Screen={SideBarScreen.mainScreenProps.Screen}
        />
    </div>
    )
}

export default OtherLinkSidebar
