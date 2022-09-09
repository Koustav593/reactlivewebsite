import react, { useState } from "react";
import emailjs from "emailjs-com";
import OTP from "./OTP";
import "./SignUp.css";
export default function SendMail() {
  const [data, setData] = useState({
    email: "",
    generateValue:"",
  });
  // let pass_data;
  const [show, setShow] = useState(true);
  let randomValue;
  return (
    <>
      {show ? (
        <>
          <div className="signUp">
            <form
              className="container"
              onSubmit={(e) => {
                e.preventDefault();
                // console.log(data);
                // setShow(false);
                randomValue = Math.floor(Math.random() * 999999);
                setData({...data,generateValue:randomValue});
                console.log(randomValue);
                console.log(data);
                setShow(false);
                data.generateValue = randomValue;
                console.log("new value: " + randomValue);
                emailjs
                  .send(
                    "service_t9q9z2z",
                    "template_k9p6apg",
                    {
                      from_name: "JIS Group",
                      to_name: data.name,
                      message: `Your OTP is : ${randomValue}`,
                      to: data.email,
                      from: "codegoecompany1214@gmail.com",
                      reply_to: "JIS Group",
                    },
                    "ou1UUAGL2nBkXSDfA"
                  )
                  .then((res) => {
                    console.log(res);
                  });
                alert("Check Your Mail");
                
              }}
            >
              <h1>Verify</h1>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                style={{ marginBottom: "20px" }}
                placeholder="Enter Your Email"
                id="email"
                required
              />
              <button>Send Us</button>
            </form>
          </div>
        </>
      ) : (
        <>
        <OTP props={data} setshow={setShow}/>
          
        </>
      )}
    </>
  );
}
