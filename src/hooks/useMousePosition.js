import { useState, useEffect } from "react";

export default function useMousePosition(l) {
  function getPosition() {
    return {
      x: -500,
      y: -500,
    };
  }

  const [mousePosition, setMousePosition] = useState(getPosition);

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    function handleTouchMove(e) {
      setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return mousePosition;
}
