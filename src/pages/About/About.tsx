import React from "react";
import { useAppSelector } from "reduxx";
import { Button } from "@mui/material";
import { useNavigateBack } from "hooks";
import Path from "route/Path";

export default function About() {
  const memo = useAppSelector((s) => s.common.memo);
  const navigateBack = useNavigateBack();

  return (
    <div className="App-header">
      <Button onClick={() => navigateBack(Path.home)}>back</Button>
      <h2>memo: {memo.value}</h2>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
      <p>About page</p>
    </div>
  );
}
