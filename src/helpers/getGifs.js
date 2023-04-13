export const getGifs = async (category) => {
  // const giphyKey = import.meta.env.VITE_GIPHY_API_KEY;
  const giphyKey = process.env.VITE_GIPHY_API_KEY;
  const urlReq = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${category}&limit=10`;
  const response = await fetch(urlReq);
  const { data } = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
