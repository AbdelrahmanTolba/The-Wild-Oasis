import { useEffect, useRef } from "react";

export function useOutsideClick(handler) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        e.preventPropagation();
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler]
  );
  return ref;
}
