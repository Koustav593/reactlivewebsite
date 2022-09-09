import react, { useState } from "react";
import { db } from "../Firebase";
import {collection,addDoc} from 'firebase/firestore';
import {useNavigate} from 'react-router-dom';
import "./SignUp.css";
export default function SignUp() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    // confirm_password: "",
  });
  const navigate=useNavigate();
  return (
    <div className="signUp">
      <form className="container"
       onSubmit={(e) => {
        e.preventDefault();
        console.log(data);
        const collection_ref=collection(db,'user_information');
        addDoc(collection_ref,data).then((res)=>{
           alert("your data is store");
           navigate('/');
        }).catch((err)=>{
           alert("your data is not store try again");
        });
        // alert("update");
        
      }}
      >
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
          placeholder="Enter UserName"
          id="username"
          required
        />
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
          type="text"
          placeholder="Enter Password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          id="password"
          required
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="text"
          required
          style={{ marginBottom: "30px" }}
          placeholder="Enter Confirm Password"
          id="confirm_password"
          pattern={data.password}
        />
        <button>
          Register
        </button>
      </form>
    </div>
  );
}
