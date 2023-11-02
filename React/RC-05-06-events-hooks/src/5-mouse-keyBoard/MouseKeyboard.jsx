import React, { useState } from "react";
import { FaReact } from "react-icons/fa";

const MouseKeyboard = () => {
  const [xEkseni, setX] = useState(0);
  const [yEkseni, setY] = useState(0);
  const mouseMove = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };
  const [inputData, setInput] = useState("");
  const keyDownEvent = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("Please enter a letter");
    } else if (e.keyCode >= 65 && e.keyCode <= 90) {
      alert("Gratz you have entered a letter");
    }
  };
  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h2>MOUSE EVENTS</h2>
      <p>X ve Y</p>
      <p className="text-danger fw-bold">
        {xEkseni} ,{yEkseni}{" "}
      </p>
      <div
        className="bg-success text-light w-50 p-5"
        id="coord"
        onMouseMove={mouseMove}
      >
        KOORDİNATLAR <FaReact />
      </div>
      <div className="mt-4 text-danger">
        <h1>---------------------------</h1>
        <h2>KEYBOARD-CLIPBOARD EVENTS</h2>
        <span className="text-success">{inputData}</span>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={keyDownEvent}
        />
      </div>
    </div>
  );
};

export default MouseKeyboard;
