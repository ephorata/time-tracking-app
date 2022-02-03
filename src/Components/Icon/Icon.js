import React from "react";

const Icon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className || ""}>
      <use href={`./sprites.svg#${props.icon}`} />
    </svg>
  );
};

export default Icon;
