// useGetImg.js

import { useEffect, useState } from 'react';

const useGetImg =  () => {
  const [images, setImages] = useState(null);
  const accessKey = "7hERQb6YQPFqdB_aCRxs0i-6DtG5iJNrUmt1M2J5oK0";

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data); // Update state with fetched images
      })
      .catch((error) => {
        console.error("Error fetching data from Unsplash:", error);
      });
  }, []);



  return images; // Return images state
};

export default useGetImg;
