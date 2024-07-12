import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";

const useProjectScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1", "0 1"],
  });

  return { ref, scrollYProgress };
};

export default useProjectScroll;
