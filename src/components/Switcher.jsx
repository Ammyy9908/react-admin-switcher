import React from "react";
import { useStateValue } from "../ServiceProvider";

function Switcher() {
  //context api dispatch method inside the src/reducer.js
  const [{ mode }, dispatch] = useStateValue();
  const handleChange = (e) => {
    dispatch({
      type: "SET_MODE",
      mode: e.target.value,
    });
  };
  return (
    <form className="switcher">
      <div className="radio">
        <label>
          <input
            type="radio"
            value="app"
            checked={mode && mode === "app"}
            onChange={handleChange}
          />
          App Mode
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="admin"
            checked={mode && mode === "admin"}
            onChange={handleChange}
          />
          Admin Mode
        </label>
      </div>
    </form>
  );
}

export default Switcher;
