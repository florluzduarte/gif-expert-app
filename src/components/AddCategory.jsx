import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValueTrimmed = inputValue.trim();
    if (inputValueTrimmed.length <= 1) return;
    onNewCategory(inputValueTrimmed);
    // setCategories((prevCategories) => [...prevCategories, inputValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};
