import React, { useEffect, useState } from "react";
import "./ScrollUp.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="_cursorWrapper_p627f_1"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
      }}
    >
      <div className="_animate_p627f_14">
        <div className="_default_p627f_19"></div>
      </div>
    </div>
  );
};

export default Cursor;
