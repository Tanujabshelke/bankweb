import React from 'react';
import Routes from '../Navigation/Routes';
import Footer from './Footer/Footer';
import "./Webpage.css";
import Header from "./Header/Header";
import Home from './MainPages/Home';
import Main from "./MainPages/Home";
// import LoanRoutes from './MainPages/Loans/LoanRoutes';
import GeneralLoan from './MainPages/Loans/LoanScreen/GeneralLoan';
import LoanSidebar from './MainPages/Loans/LoanSidebar';

export default function Webpage() {
    return (
        
        <div className="container">
           <Header />
           {/* <h1>Hello</h1> */}
            {/* <Routes /> */}
           {/* <LoanSidebar /> */}
           <Footer />
             {/* <GeneralLoan /> */}
             {/* <LoanRoutes /> */}
        </div>
    )
}
