import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  const login = async (data) => {
    setErr("");
    setSuccess(false);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        setSuccess(true);
        navigate("/");
      }
    } catch (err) {
      //setErr(err.message);
      setErr("Invalid email or password");
      console.log(err);
    }
  };


  return (
    <div className="flex justify-center w-full my-10 px-5 ">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* //google login button */}
        <Button onClick={()=> authService.loginWithGoogle()} className="mt-6 w-full">
          Login with Google
        </Button>

        <form onSubmit={handleSubmit(login)} className="mt-8.. mt-6  ">
          <div className="">
            <Input
              label="Email: "
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs pl-1">
                {errors.email.message}
              </p>
            )}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^[A-Za-z\d@$!%*?&]{8,16}$/,
                  message: "Password must be 8-16 character long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-xs pl-1">
                {errors.password.message}
              </p>
            )}

            <Button type="submit" className="w-full my-5">
              Sign in
            </Button>
            {err && <p className="my-3 text-red-400 text-center">{err}</p>}

            {success && (
              <p className="my-3 text-green-400 text-center">
                Login successful, redirecting...!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
