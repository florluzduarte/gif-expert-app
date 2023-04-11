import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newGifs = async () => {
    const response = await getGifs(category);
    setGifs(response);
    setIsLoading(false);
  };

  useEffect(() => {
    newGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
