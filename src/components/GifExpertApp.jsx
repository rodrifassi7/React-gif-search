import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((category) => category !== categoryToDelete));
  };

  return (
    <>
      <h1>Buscador de Gifs</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <>
          <button className="delete-button" onClick={() => onDeleteCategory(category)}>Eliminar</button>
          <GifGrid key={category} category={category} />
        </>
      ))}
    </>
  );
};
