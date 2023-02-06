import React, { useRef, useState, useEffect } from "react";
import "../styles/App.css";
import InputField from "./InputField.js";
const App = () => {
  //code here
  const [value, setValue] = useState("");
  const [values, setV2] = useState("");
  // const v = () => {
  //   setValue(value);
  // };

  // const newRef = React.createRef();

  const newRef = useRef(null);

  const settingValue = () => {
    setV2(value);
    setValue("");
  };
  const focusInput = (event) => {
    newRef.current.focus();
  };

  return (
    <div>
      <InputField ref={newRef} type="text" value={value} setValue={setValue} />
      <br />
      <button id="settingValueButton" onClick={settingValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus the input
      </button>
      <br />
      <br />
      <textarea id="textarea" value={values}></textarea>
    </div>
  );
};

export default App;

