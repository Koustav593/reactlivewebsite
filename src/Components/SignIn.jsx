import react, { useState } from "react";
import {Link} from 'react-router-dom';
import "./SignUp.css";
import { db } from "../Firebase";
import { doc, getDocs, updateDoc } from "firebase/firestore";
import { collection, } from "firebase/firestore";
export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let movs_imp;
  const collection_ref = collection(db, "user_information");
  getDocs(collection_ref).then((res) => {
    movs_imp = res.docs.map((doc) => ({
      email: doc.data().email,
      password:doc.data().password
    }));
  })
  return (
    <div className="signUp">
      <form className="container"
       onSubmit={(e) => {
        e.preventDefault();
        console.log(data);
        // const collection_ref = collection(db, "user_information");
        //   getDocs(collection_ref).then((res) => {
        //     const movs = res.docs.map((doc) => ({
        //       email: doc.data().email,
        //       password:doc.data().password
        //     }));
        //     console.log(movs);
            // let id = "";
            // let i=0;
            movs_imp.map((imf) => {
              // i++;
              if(imf.email==data.email){
               if(data.password==imf.password){
                alert("Your login successful");
                // console.log(data);
               }
               else{
                console.log(data);
                 alert('Your password is wrong!');
               }
              }
              //  if(imf.email != data.email){
              //      if(movs_imp.length()==(i-1)){
              //         alert("email does not exist");
              //      }
              //  }
            });
            
        
      }}
      >
        <h1>Sign In</h1>
        {/* <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
          placeholder="Enter UserName"
          id="username"
          required
        /> */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          placeholder="Enter Email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          style={{ marginBottom: "30px" }}
          id="password"
          required
        />
        {/* <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          required
          style={{ marginBottom: "30px" }}
          onChange={(e) => {
            setData({ ...data, confirm_password: e.target.value });
          }}
          placeholder="Enter Confirm Password"
          id="confirm_password"
        /> */}
        <button>Sign In</button>
        <Link to="/SendMail" className="forget">forgot password</Link>
        {/* <p className="forget">forgot password</p> */}
         <h1
          className="or"
          style={{alignSelf:"center",fontSize:"20px"}}
        >OR</h1>
        {/* <p className="account">Don't have an account</p> */}
        <Link to="/SignUp" className="account">Don't have an account?</Link>
      </form>
    </div>
  );
}
