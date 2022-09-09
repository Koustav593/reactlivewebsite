import react, { useState } from "react";
import { db } from "../Firebase";
import { doc, getDocs, updateDoc } from "firebase/firestore";
import { collection, } from "firebase/firestore";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
export default function Confirm({ email }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    // username: "",
    // email: "",
    new_password: "",
    confirm_password: "",
  });
  const [text,setText]=useState("");
  return (
    <div className="signUp">
      <form
        className="container"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
          console.log(email);
          setText("Processing.....");
          const collection_ref = collection(db, "user_information");
          getDocs(collection_ref).then((res) => {
            const movs = res.docs.map((doc) => ({
              email: doc.data().email,
              id: doc.id,
            }));
            console.log(movs);
            let id = "";
            movs.map((data) => {
              id = (email == data.email)? data.id : null;
            });
            const doc_ref = doc(db, "user_information", id);
            console.log(doc_ref);
            updateDoc(doc_ref, {
              password: data.new_password,
            })
              .then((res) => {
                alert("your data is update");
                navigate("/");
              })
              .catch((err) => {
                alert("your data is not update try again");
                console.log(err);
              });
          });
        }}
      >
        <h1>Set Password</h1>
        {/* <label htmlFor="username">Username</label>
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
        /> */}
        <label htmlFor="password">New Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          onChange={(e) => {
            setData({ ...data, new_password: e.target.value });
          }}
          id="password"
          required
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="text"
          required
          style={{ marginBottom: "30px" }}
          onChange={(e) => {
            setData({ ...data, confirm_password: e.target.value });
          }}
          placeholder="Enter Confirm Password"
          id="confirm_password"
          pattern={data.new_password}
        />
        <button>Change</button>
        <Link to="/" className="account">
          Sign In
        </Link>
        <p  className="account"
          style={{color:'black',fontWeight:'bold'}}
        >{text}</p>
      </form>
    </div>
  );
}
