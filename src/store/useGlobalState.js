import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({
    cursor: { type: "default" },
    project: { isOpened: false, id: 0 },
    section: "cover",
    scroll: 0,
  });

  const actions = (action) => {
    const { type, payload } = action;

    switch (type) {
      case "setState":
        return setState(payload);
      default:
        return state;
    }
  };
  return { state, actions };
};

export default useGlobalState;
