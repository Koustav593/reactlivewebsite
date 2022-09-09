import react, { useState } from "react";
import {Link} from 'react-router-dom';

// import emailjs from "emailjs-com";
import Confirm from "./Confirm";
import "./SignUp.css";
export default function OTP({props,setshow}) {
  // console.log('props',props);
  // let value=props.generated_value;
  const [data, setData] = useState({
    OTP_value: "",
  });
  // console.log('props',props);
  const [show, setShow] = useState(true);
  // let randomValue=params.randomValue;
  return (
    <>
      {show ? (
        <>
          <div className="signUp">
            <form
              className="container"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(data);
                // console.log("inside generated value ",value);
              
                console.log('props',props.generateValue);
                console.log("data",data.OTP_value);

                (data.OTP_value==props.generateValue)?setShow(false):setShow(true);
               
              }}
            >
              <h1>OTP Verification</h1>
              <label htmlFor="email">OTP</label>
              <input
                type="text"
                onChange={(e) => {
                  setData({ ...data, OTP_value: e.target.value });
                }}
                placeholder="Enter OTP"
                id="email"
                required
                style={{ marginBottom: "30px" }}
                pattern={`${props.generateValue}`}
              />
              {/* conditional rendering */}
              <button
                 onClick={()=>{
                //   randomValue = Math.floor(Math.random() * 999999);
                // // data.generateValue = randomValue;
                // console.log("new value: " + randomValue);
                // emailjs
                //   .send(
                //     "service_t9q9z2z",
                //     "template_k9p6apg",
                //     {
                //       from_name: "JIS Group",
                //       to_name: data.name,
                //       message: `Your OTP is : ${randomValue}`,
                //       to: data.email,
                //       from: "codegoecompany1214@gmail.com",
                //       reply_to: "JIS Group",
                //     },
                //     "ou1UUAGL2nBkXSDfA"
                //   )
                //   .then((res) => {
                //     console.log(res);
                //   });
                // alert("Check Your Mail");
                 }}
              >Verify</button>
              {/* <Link to="/SendMail" className="account">Resend OTP</Link> */}
              <p
               className="account"
               onClick={()=>{
                setshow(true);
               }}
              >Resend OTP</p>
            </form>
          </div>
        </>
      ) : (
        <>
          <Confirm email={props.email}/>
        </>
      )}
    </>
  );
}
