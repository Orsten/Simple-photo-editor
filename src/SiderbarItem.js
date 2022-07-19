import React from "react";

const SiderbarItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default SiderbarItem;
