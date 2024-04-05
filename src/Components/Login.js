import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("signup");

  return (
    <div className="h-[42rem] bg-hero bg-inherit sm:bg-cover flex justify-center items-center">
      <div className="border border-white rounded-lg w-[42rem] h-[] translate-y-20   flex flex-col gap-10 items-center pt-8 mb-4">
        <h1 className="text-5xl font-bold text-white ">
          {state === "signup" ? "Sign up" : "Login"}
        </h1>
        {state === "signup" ? (
          <input
            className="w-[78%] h-[50px] pl-4 rounded-md"
            type="text"
            placeholder="Username"
          />
        ) : (
          <></>
        )}
        <input
          className="w-[78%] h-[50px] pl-4 rounded-md"
          type="text"
          placeholder="Email"
        />
        <input
          className="w-[78%] h-[50px] pl-4 rounded-md"
          type="password"
          placeholder="password"
        />
        <button className="w-[78%] h-[50px] bg-red-500 text-2xl text-white">
          Continue
        </button>
        <h2 className="text-white text-lg -translate-y-7 mb-8">
          {state === "signup"
            ? "Already have a Account ? "
            : "Create an Account ? "}

          <span
            className="text-red-700 font-bold cursor-pointer"
            onClick={() =>
              state === "signup" ? setState("login") : setState("signup")
            }
          >
            Click here
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Login;
