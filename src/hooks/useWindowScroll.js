import { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(false);
  let start = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!start.current) {
        setWindowScroll(true);
        start.current = true;
      }
      debounceScroll();
    };

    const debounceScroll = debounce(() => {
      setWindowScroll(false);
      start.current = false;
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScroll;
}
