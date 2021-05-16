import React, { useState } from "react";
import Table from "./Table";

export default function Form({ findMostFrequent }) {
  const [num, setNum] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log("clicked submit", num);
    if (!num) {
      alert("Number field cannot be blank");
    } else {
       
          findMostFrequent(num);
          setNum("");
    }
  };
  return (
    
    <div className="container my-4">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="num" className="form-label">
            <h3>Enter the value of N</h3>
          </label>
          <input
            type="number"
            className="form-control"
            id="num"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
