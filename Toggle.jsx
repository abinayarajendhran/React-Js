import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(" ");

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Hello! Welcome to React </p>}
    </div>
  );
}

export default ToggleText;
