import React, { useState } from "react";

const Login = () => {
  const [signInToggle, setSignInToggle] = useState(true);
  return (
    <div className="login-background flex flex-col">
      <div className="login-background-head h-40 p-6 px-12">
        <img src="/netflix-long-logo.svg" alt="Netflix" className="w-36" />
      </div>
      <div className="flex-1 px-12 flex justify-center">
        <div className="bg-black bg-opacity-80 rounded-xl p-8 text-white flex flex-col gap-3 w-3/12">
          <span className="text-2xl font-bold">
            {signInToggle ? "Sign In" : "Sign Up"}
          </span>
          <div className="w-full">
            <span>Email</span>
            <input className="w-full" placeholder="Email"></input>
          </div>
          {signInToggle && (
            <div className="w-full">
              <span>Password</span>
              <input className="w-full" placeholder="Password"></input>
            </div>
          )}
          <button className="mt-5 bg-[#e50914] p-3 rounded-md">
            {signInToggle ? "Sign In" : "Sign Up"}
          </button>
          {signInToggle ? (
            <span className="text-slate-600">
              New to Netflix?{" "}
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={() => setSignInToggle(false)}
              >
                Sign up now
              </span>
            </span>
          ) : (
            <span className="text-slate-600">
              Already a user?{" "}
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={() => setSignInToggle(true)}
              >
                Sign in now
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="login-background-foot h-40"></div>
    </div>
  );
};

export default Login;
