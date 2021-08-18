import React, { useContext } from "react";
import { Switch, Route, HashRouter, useParams } from "react-router-dom";
import Home from "../Components/MainPages/Home";
import HeaderSidebar from "../Components/Header/HeaderSidebar";
import GoldLoan from "../Components/MainPages/Loans/LoanScreen/GoldLoan";
import GeneralLoan from "../Components/MainPages/Loans/LoanScreen/GeneralLoan";
import About from "../Components/MainPages/AboutUs/About";
import Contact from "../Components/MainPages/ContactUs/Contact";
import LoanSidebar1 from "../Components/MainPages/Loans/LoanSidebar1";
import ServiceSidebar from "../Components/MainPages/Services/ServiceSidebar";
import ServiceScreen from "../Components/MainPages/Services/ServiceScreen";
import Savings from "../Components/MainPages/Deposite/DepositeScreen/Savings";
import DepositeSidebar from "../Components/MainPages/Deposite/DepositeSidebar";
import Gallery from "../Components/MainPages/OtherLinks/OtherLinkScreen/Gallery";
import OtherLinkSidebar from "../Components/MainPages/OtherLinks/OtherLinkSidebar";
import SidebarComponent from "../Components/MainPages/SidebarComponent";

const loans = [
  { component: GeneralLoan, title: "General Loan", path: "/loan/" },
  { component: GoldLoan, title: "Gold Loan", path: "/loan/goldLoan" },
  { component: GeneralLoan, title: "Housing Loan", path: "/loan/housingLoan" },
  { component: GeneralLoan, title: "Term Loan", path: "/loan/termLoan" },
  { component: GeneralLoan, title: "Cash Loan", path: "/loan/cashLoan" },
  {
    component: GeneralLoan,
    title: "Two Wheeler Loan",
    path: "/loan/twoWheelerLoan",
  },
  {
    component: GeneralLoan,
    title: "Commercial Loan",
    path: "/loan/commercialLoan",
  },
  { component: GeneralLoan, title: "Car Loan", path: "/loan/carLoan" },
  {
    component: GeneralLoan,
    title: "Old Vehical Loan",
    path: "/loan/oldVehicalLoan",
  },
  { component: GeneralLoan, title: "Education Loan", path: "/loan/" },
  { component: GeneralLoan, title: "Hypothication Loan", path: "/loan/" },
  { component: GeneralLoan, title: "Arthchakra Loan", path: "/loan/" },
  { component: GeneralLoan, title: "Parytan Loan", path: "/loan/" },
  { component: GeneralLoan, title: "Project Loan", path: "/loan/" },
  { component: GeneralLoan, title: "Consumer Durable Loan", path: "/loan/" },
  { component: GeneralLoan, title: "NSC Loan", path: "/loan/" },
];

const services = [
  {  component: ServiceScreen,title: "Franking", path: "/services/" },
  // {  component: GeneralLoan,title: "Cheque Clearing", path: "/services/" },
  // {  component: GeneralLoan,title: "Demand Drafts", path: "/services/" },
  // {  component: GeneralLoan,title: "Adhar Based LPG Subsidy", path: "/services/" },
  // {  component: GeneralLoan,title: "Insurance", path: "/services/" },
  // {  component: GeneralLoan,title: "SMS Alert Facility", path: "/services/" },
  // {  component: GeneralLoan,title: "RUPAY Debit Card", path: "/services/" },
  // {  component: GeneralLoan,title: "POS", path: "/services/" },
  // {  component: GeneralLoan,title: "RTGS And NEFT", path: "/services/" },
  // {  component: GeneralLoan,title: "E-Tax Payment", path: "/services/" },
  // {  component: GeneralLoan,title: "Service Charges", path: "/services/" },
];
const deposite = [
  { component: Savings,title: "Savings Bank Account", path: "/deposite/" },
  { component: Savings,title: "Current Deposit Account", path: "/deposite/" },
  { component: Savings,title: "Fixed Deposit Account", path: "/deposite/" },
  { component: Savings,title: "Recurring Deposit Account", path: "/deposite/" },
];
const otherLinks = [
  {component:Gallery, title: "Gallery" , path:"/otherLinks"},
  {component:Gallery, title: "Know your customer(KYC)", path: "/otherLinks/" },
  {component:Gallery, title: "Unclaimed Deposite Transfered to DEAF", path: "/otherLinks/" },
  {component:Gallery, title: "Annual Report", path: "/otherLinks/" },
];


function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/test">
          <SidebarComponent />
        </Route>
        <Route exact path="/">
          <HeaderSidebar MainScreen={Home} />
        </Route>
        <Route exact path="/about">
          <HeaderSidebar MainScreen={About} />
        </Route>
        {loans.map((i) => {
          return (
            <Route exact path={i.path}>
              <HeaderSidebar
                MainScreen={LoanSidebar1}
                mainScreenProps={{ Screen: i.component }}
              />
            </Route>
          );
        })}
        {deposite.map((i) => {
          return (
            <Route exact path={i.path}>
              <HeaderSidebar
                MainScreen={DepositeSidebar}
                mainScreenProps={{ Screen: i.component }}
              />
            </Route>
          );
        })}
        {otherLinks.map((i) => {
          return (
            <Route exact path={i.path}>
              <HeaderSidebar
                MainScreen={OtherLinkSidebar}
                mainScreenProps={{ Screen: i.component }}
              />
            </Route>
          );
        })}
        <Route exact path="/contactUs">
          <HeaderSidebar MainScreen={Contact} />
        </Route>
        {services.map((i) => {
          return (
            <Route exact path={i.path}>
              <HeaderSidebar
                MainScreen={ServiceSidebar}
                mainScreenProps={{ Screen: i.component }}
              />
            </Route>
          );
        })}
      </Switch>
    </HashRouter>
  );
}

export default Routes;
