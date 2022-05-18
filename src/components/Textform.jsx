import React, { useState, useEffect } from "react";
import "./textform.css";

const Textform = () => {
  const [emojivalue, setemojivalue] = useState("");

  function handleChange(e) {
    e.preventDefault();
    var val = e.target.value;

    setemojivalue(val);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("in api call");
    const value = emojivalue;

    const res = await fetch("http://localhost:9008/text ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emojiText: value,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Type the text</h1>
      <input
        type="text"
        placeholder="type your text here "
        value={emojivalue}
        onChange={(e) => handleChange(e)}
        className="myinput"
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className="btn">
        Submit
      </button>
    </div>
  );
};

export default Textform;
