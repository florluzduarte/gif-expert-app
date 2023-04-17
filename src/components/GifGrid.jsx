import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div key={category}>
      <h2>{category}</h2>

      {isLoading && <h3>Cargando imágenes...</h3>}

      <div className="card-grid">
        {gifs.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
