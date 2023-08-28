import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);



  return (
    <>
      <h3> {category} </h3>
      {/* <button onClick={() => setCount(count + 1)}>Eliminar</button> */}
      {isLoading && (<h2> Cargando...</h2>)}

      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
