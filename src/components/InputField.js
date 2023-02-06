import React, { useRef, useState, useEffect } from "react";
import "../styles/App.css";

//complete the following using forward refs concept

const InputField = React.forwardRef((props, ref) => {
  const xyz = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <div>
      <input id="input" type="text" ref={ref} value={null} onChange={xyz} />
    </div>
  );
});
export default InputField;
