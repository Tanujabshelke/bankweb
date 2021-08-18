import React,{useContext } from "react";
import { Switch ,Route, HashRouter,useParams } from "react-router-dom";
import GeneralLoan from "./LoanScreen/GeneralLoan";
import GoldLoan from "./LoanScreen/GoldLoan";
import LoanSidebar from "./LoanSidebar";


function LoanRoutes(){
   return(
       <HashRouter>
           <Switch>
               <Route exact path="/">
                   <LoanSidebar Screen={GeneralLoan} />
               </Route>
               <Route exact path="/GoldLoan">
                   <LoanSidebar Screen={GoldLoan} />
               </Route>
               {/* <Route exact path="/">
                   <LoanSidebar Screen={GeneralLoan} />
               </Route> */}
           </Switch>
       </HashRouter>
   )
}

export default LoanRoutes;