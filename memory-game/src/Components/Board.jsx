// Board.js

import React, { useEffect, useState } from "react";
import useGetImg from "../Hooks/useGetImg";
import { Card } from "./Card";
const Board = () => {
  const images = useGetImg();
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
    console.log("Rednder again");
  }, [images]);

  console.log("Images", images);

  return (
    <div className="w-[70vw] h-[70vh] m-auto grid grid-cols-4 gap-1 ">
      {images &&
        images.map((img) => {
          return <Card image={img} />;
        })}
    </div>
  );
};

export default Board;
