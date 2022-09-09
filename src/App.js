// import logo from './logo.svg';
// import './App.css';
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import SendMail from "./Components/SendMail";
// import OTP from "./Components/OTP";
// import Confirm from "./Components/Confirm";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   {/* <SignUp /> */}
    //   {/* <SignIn/> */}
    //   {/* <SendMail/> */}
    //   {/* <OTP/> */}
    //   {/* <Confirm/> */}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/SendMail" element={<SendMail/>}/>
        {/* <Route path="/" element={<SignIn/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
