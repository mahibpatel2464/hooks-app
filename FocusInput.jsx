import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div className="box">
      <h2>useRef Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <br /><br />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
