import React from "react";
import { useStateValue } from "../ServiceProvider";
import MenuOption from "./MenuOption";

function MenuBar() {
  const [{ mode }, dispatch] = useStateValue();

  const handleItemSelection = (e) => {
    dispatch({
      type: "SET_MENU_ITEM",
      menuitem: e.target.innerText,
    });
  };

  const links = [
    {
      id: 1,
      app_link: "Entry 1",
      admin_link: "Admin Entry 1",
    },
    {
      id: 2,
      app_link: "Entry 2",
      admin_link: "Admin Entry 2",
    },
    {
      id: 3,
      app_link: "Entry 3",
      admin_link: "Admin Entry 3",
    },
    {
      id: 4,
      app_link: "Entry 4",
      admin_link: "Admin Entry 4",
    },
    {
      id: 5,
      app_link: "Entry 5",
      admin_link: "Admin Entry 5",
    },
  ];

  return (
    <div className={`menu-bar ${mode + "__mode"}`}>
      {links.map((item) => {
        return (
          <MenuOption
            entry={mode === "admin" ? item.admin_link : item.app_link}
            onClick={handleItemSelection}
          />
        );
      })}
    </div>
  );
}

export default MenuBar;
