import React from "react";
import { useStateValue } from "../ServiceProvider";

function MenuOption({ onClick, entry }) {
  const [{ menuitem }] = useStateValue();
  console.log(menuitem != null ? menuitem === entry : null);
  return (
    // eslint-disable-next-line
    <a
      className={`menu-option ${menuitem === entry && "active__link"}`}
      onClick={onClick}
    >
      <span>{entry}</span>
    </a>
  );
}

export default MenuOption;
