import React from "react";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Journal App</h1>
    </div>
  );
}
