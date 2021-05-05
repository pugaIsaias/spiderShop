import { useState } from "react";

const LocalStatehooks = (localItem) => {
  const [loc, setState] = useState(localStorage.getItem(localItem) || []);

  function setLoc(newItem) {
    loc.push(newItem);
    localStorage.setItem(localItem, JSON.stringify(loc));
    setState(newItem);
  }

  return [loc, setLoc];
};

export default LocalStatehooks;
