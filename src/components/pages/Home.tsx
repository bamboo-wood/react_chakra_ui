import React, { FC, memo } from "react";
import { Outlet } from "react-router";

export const Home: FC = memo(() => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
});
