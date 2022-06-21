import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

const useMounted = (): MutableRefObject<boolean> => {
  const isMounted = useRef(true);

  useEffect(
    () => (): void => {
      isMounted.current = false;
    },
    []
  );

  return isMounted;
};

export default useMounted;
