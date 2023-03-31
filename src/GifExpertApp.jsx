import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    const minCategory = newCategory.toLowerCase().replace(/\s/g, "");
    const minCategories = categories.map((category) =>
      category.toLowerCase().replace(/\s/g, "")
    );
    if (minCategories.includes(minCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* <AddCategory
        onNewCategory={(newCategory) => onAddCategory(newCategory)}
      /> */}
      {/* <AddCategory setCategories={setCategories} prevCategories={categories} /> */}
      {/* <AddCategory setCategories={setCategories} /> */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
