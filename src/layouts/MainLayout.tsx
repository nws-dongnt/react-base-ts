import React from "react";
import { Outlet, Link } from "react-router-dom";
import BaseLayout from "./BaseLayout";

export default function MainLayout() {
  return (
    <BaseLayout>
      <div
        style={{
          display: "flex",
          gap: 15,
          justifyContent: "center",
          backgroundColor: "#282c34",
        }}
      >
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
      </div>
      <Outlet />
    </BaseLayout>
  );
}
