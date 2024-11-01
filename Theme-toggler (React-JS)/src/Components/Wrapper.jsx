import React from "react";
import { Login } from "./Login";
import { ToggleBtn } from "./ToggleBtn";

export const Wrapper = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <ToggleBtn />
        <Login />
      </div>
    </>
  );
};
