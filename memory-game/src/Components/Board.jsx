import React from "react";
import useGetImg from "../Hooks/useGetImg";
const Board = () => {
  let images = useGetImg();
  console.log(images, "images");
  return (
    <div className="w-[70vw] h-[70vh] m-auto bg-green-600">
      {images?.map((el) => {
        return <img src={el.url.full} />;
      })}
    </div>
  );
};

export default Board;
