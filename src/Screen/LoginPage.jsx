import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Request/firebase";
import { signInWithGooglePopup } from "../Request/firebase";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  //* Login with firebase authentication
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <section className=" bg-slate-100 padding">
      <div className="max-w-[400px] mx-auto bg-white rounded-lg shadow-3xl py-16 px-8">
        <form className="flex flex-col justify-center gap-6">
          <h3 className="text-2xl text-center font-medium">Sign In</h3>
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
          {/* //* Login with firebase authentication */}
          <button className="bg-black text-white py-4 mt-4" onClick={signIn}>
            Sign In
          </button>
          <div className="flex items-center my-1">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-2 text-center">Or</p>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button
            className="bg-blue-500 text-white py-4"
            onClick={logGoogleUser}
          >
            Login with Google
          </button>
          <p className=" text-center">
            Create an account?
            <span
              className="italic text-blue-400 cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
