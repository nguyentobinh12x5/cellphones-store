import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Request/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullnameRef = useRef();
  const phoneRef = useRef();
  const navigate = useNavigate();
  //* Login with firebase authentication
  const register = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
      phoneRef.current.value,
      fullnameRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <section className=" bg-slate-100 padding">
      <div className="max-w-[400px] mx-auto bg-white rounded-lg shadow-3xl py-16 px-8">
        <form className="flex flex-col justify-center gap-6">
          <h3 className="text-2xl text-center font-medium">Sign Up</h3>
          <input
            ref={fullnameRef}
            type="text"
            placeholder="Fullname"
            className="h-[60px] rounded px-2 w-full focus:outline-none"
          ></input>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email or phone number"
            className="h-[60px] rounded px-2 border-none w-full focus:outline-none"
          ></input>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="h-[60px] rounded px-2 border-none focus:outline-none"
          ></input>
          <input
            ref={phoneRef}
            type="text"
            placeholder="Phone"
            className="h-[60px] rounded px-2 border-none w-full focus:outline-none"
          ></input>
          <button className="bg-black text-white py-4 mt-4" onClick={register}>
            Sign Up
          </button>
          <p className=" text-center">
            Login?{" "}
            <span
              className=" text-blue-400 italic cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Click
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
