import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState();

  const onInputChange = ({target}) => {
    setinputValue(target.value);

  };

  const onSubmit = (event) => {
    event.preventDefault();
    if ( inputValue.trim().lenght <= 1) return;
    onNewCategory ( inputValue.trim())
    setinputValue('')
    
  }

  return (
    <form onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
