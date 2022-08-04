import { useEffect } from "react";
import { useRef } from "react";

const useOuterClick = (callback) => {
  const innerRef = useRef();
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handleClick = (e) => {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return innerRef;
};

export default useOuterClick;
