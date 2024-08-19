import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute rounded-full border-2 border-solid border-[#333333]  h-[200px] w-[225px] mt-[37rem] bg-[#1f1f1f] animate-ping" />
      <div className="absolute rounded-full border border-solid border-[#333333]  h-[300px] w-[380px] mt-[37rem] " />
      <div className="absolute rounded-full border border-solid border-[#333333]  h-[500px] w-[500px] mt-[37rem]" />
      <div className=" border-2 rounded-full border-solid border-[#d3e97a] opacity-20 h-[650px] w-[650px] mt-[37rem] absolute " />
      <div className=" border-2 rounded-full border-solid border-[#333333] opacity-20 h-[800px] w-[800px] mt-[37rem] bg-[#1f1f1f]  absolute  animate-pulse " />
    </motion.div>
  );
}

export default BackgroundCircles;
