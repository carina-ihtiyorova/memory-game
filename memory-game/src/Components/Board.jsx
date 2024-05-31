// Board.js

import React, { useEffect, useState } from 'react';
import useGetImg from '../Hooks/useGetImg';

const Board = () => {

  const images = useGetImg();
  const [render,setRender] = useState(false);
  useEffect(()=>{
    setRender(true);
    console.log("Rednder again")
  },[images]);

  console.log("Images", images);

  return (
    <div className='w-[70vw] h-[70vh] m-auto flex flex-wrap'>
      {
        images && images.map((img)=>{
            return (<div>
                <img src={img.urls.thumb}/>
            </div>)
        })
      }
    </div>
  );
};

export default Board;
