import { useState, useEffect } from "react";
import { debounce } from "lodash";

export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(false);
  let start = false;

  useEffect(() => {
    const handleScroll = () => {
      if (!start) {
        setWindowScroll(true);
        start = true;
      }
      debounceScroll();
    };

    const debounceScroll = debounce(() => {
      setWindowScroll(false);
      start = false;
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScroll;
}
