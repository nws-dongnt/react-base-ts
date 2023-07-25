import React from "react";
import logo from "logo.svg";
import { useAppSelector } from "reduxx";

export default function About() {
  const memo = useAppSelector((s) => s.common.memo);

  return (
    <div className="App-header">
      <h2>memo: {memo.value}</h2>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
