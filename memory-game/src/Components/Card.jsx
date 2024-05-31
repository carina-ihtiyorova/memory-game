import React from "react";

export const Card = ({ image }) => {
  return (
    <div>
      <img alt="example" src={image.urls.thumb} />;
    </div>
  );
};
