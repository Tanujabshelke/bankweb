import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
// import LoanRoutes from './Components/MainPages/Loans/LoanRoutes';
import GeneralLoan from './Components/MainPages/Loans/LoanScreen/GeneralLoan';
import LoanSidebar from './Components/MainPages/Loans/LoanSidebar';
import LoanSidebar1 from './Components/MainPages/Loans/LoanSidebar1';
import Webpage from './Components/Webpage';
import Routes from './Navigation/Routes';

function App() {
  return (
    <div className="App">
      {/* <Webpage /> */}
      <Header />
      <Routes />
      {/* <LoanSidebar Screen={GeneralLoan} /> */}
     {/* <LoanSidebar1 /> */}
      <Footer />
    </div>
  );
}

export default App;
