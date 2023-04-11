import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    const minCategory = newCategory.toLowerCase().replace(/\s/g, "");
    const minCategories = categories.map((category) =>
      category.toLowerCase().replace(/\s/g, "")
    );
    if (minCategories.includes(minCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
