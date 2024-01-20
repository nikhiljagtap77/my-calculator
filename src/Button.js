import { useState } from "react";

const ButtonPanel = ({ name, clickHandler, orange, wide }) => {
  const [divName, setDivName] = useState([
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ]);
  console.log(divName.join(" ").trim());

  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <div className={divName.join(" ").trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

export default ButtonPanel;
