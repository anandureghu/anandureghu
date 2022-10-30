import React from "react";

const MenuItem = ({ href, name, closeMenu }) => {
  return (
    <li onClick={closeMenu}>
      <a href={href}>{name}</a>
    </li>
  );
};

export default MenuItem;
