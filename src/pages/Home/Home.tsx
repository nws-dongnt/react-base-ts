import React, { ChangeEvent } from "react";
import logo from "logo.svg";
import { useAppDispatch, useAppSelector } from "reduxx";
import { updateMemo } from "reduxx/commonReducer";

export default function Home() {
  const dispatch = useAppDispatch();
  const memo = useAppSelector((s) => s.common.memo);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateMemo(event.target.value));
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <input value={memo.value} onChange={handleChange} />
      <button type="button" onClick={() => window.location.reload()}>
        reload page
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
