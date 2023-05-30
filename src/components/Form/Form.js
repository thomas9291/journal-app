import React from "react";

import classes from "./Form.module.css";

export default function Form({ onformData }) {
  const handleFormData = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.isFavorite = false;
    onformData(data);
    event.target.reset();
    event.target.elements.title.focus();
  };
  return (
    <div>
      <form onSubmit={handleFormData} className={classes.formContainer}>
        <div className={classes.title}>
          <label htmlFor="title">title:</label>
          <input type="text" name="title" id="title" required />
        </div>
        <div className={classes.text}>
          <label htmlFor="text">text:</label>
          <textarea name="text" id="text" cols="30" rows="10"></textarea>
        </div>
        <button className={classes.btn} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
