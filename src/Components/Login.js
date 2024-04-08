import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("login");
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const signup = async () => {
    console.log("Signup function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-bheemal", responseData.user.userName);
      window.location.replace("/BheemalShampoo");
    } else {
      alert("Userdata already exists, Fill New data");
    }
  };

  const login = async () => {
    console.log("login function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-bheemal", responseData.user.userName);
      console.log(responseData);
      window.location.replace("/BheemalShampoo");
    } else {
      alert("Please Fill Correct Credentials");
    }
  };

  return (
    <div className="h-[100%] bg-hero bg-inherit sm:bg-cover flex justify-center items-center pt-20 pb-20">
      <div className="border border-white rounded-lg w-[42rem] h-[] translate-y-20   flex flex-col gap-10 items-center pt-8 mb-4">
        <h1 className="text-5xl font-bold text-white ">
          {state === "signup" ? "Sign up" : "Login"}
        </h1>
        {state === "signup" ? (
          <>
            <input
              className="w-[78%] h-[50px] pl-4 rounded-md"
              type="text"
              placeholder="Fullname"
              name="fullName"
              onChange={changeHandle}
            />
            <input
              className="w-[78%] h-[50px] pl-4 rounded-md"
              type="text"
              placeholder="Username"
              name="userName"
              onChange={changeHandle}
            />
          </>
        ) : (
          <></>
        )}
        <input
          className="w-[78%] h-[50px] pl-4 rounded-md"
          type="text"
          placeholder="Email"
          name="email"
          onChange={changeHandle}
        />
        <input
          className="w-[78%] h-[50px] pl-4 rounded-md"
          type="password"
          placeholder="password"
          name="password"
          onChange={changeHandle}
        />
        {state === "signup" ? (
          <input
            className="w-[78%] h-[50px] pl-4 rounded-md"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={changeHandle}
          />
        ) : (
          ""
        )}
        <button
          className="w-[78%] h-[50px] bg-red-500 text-2xl text-white"
          onClick={() => {
            state === "signup" ? signup() : login();
          }}
        >
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

export default LoginSignup;
