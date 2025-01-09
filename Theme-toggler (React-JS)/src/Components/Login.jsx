import React from "react";
import { PlusSignCircleIcon } from "hugeicons-react";

export const Login = () => {
  return (
    <>
      <div className="login-card transition-all duration-200 bg-gray-200 dark:bg-zinc-900 shadow-sm px-10 py-8 w-[35%] flex flex-col gap-5 rounded-lg">
        <h1 className="text-[1.8rem] font-semibold dark:text-white transition-all duration-200">
          Login
        </h1>
        <form action="" className="w-full flex flex-col gap-5">
          <div className="input-control w-full transition-all duration-200">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full rounded-md py-3 px-3 dark:bg-[#ffffff29] dark:text-white transition-all duration-200"
            />
          </div>
          <div className="input-control w-full transition-all duration-200">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-md py-3 px-3 dark:bg-[#ffffff29] dark:text-white transition-all duration-200"
            />
          </div>
          <div className="input-control w-full">
            <button className="bg-sky-700 hover:bg-sky-800 text-white w-full py-2.5 rounded-md text-[1.1rem] tracking-wider font-semibold transition-all duration-200">
              LOGIN
            </button>
          </div>

          <div className="separator flex justify-center items-center gap-5">
            <hr className="line border-t border-slate-400 flex-grow" />
            <span className="dark:text-slate-400 transition-all duration-200">
              OR
            </span>
            <hr className="line border-t border-slate-400 flex-grow" />
          </div>

          <div className="input-control flex justify-center items-center">
            <button className="flex justify-center items-center gap-2 bg-emerald-500 rounded-md w-full py-2.5 text-white font-semibold">
              <PlusSignCircleIcon color="white" size={20} strokeWidth={2.5} />
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
