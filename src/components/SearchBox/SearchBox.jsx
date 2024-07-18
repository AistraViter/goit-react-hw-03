import { useId } from "react";
import styles from "./SearchBox.module.css";
const SearchBox = ({inputValue = "", handleChange}) => {
  const { searchBox } = styles;
  const id = useId();


  return (
    <div className={searchBox}>
      <label htmlFor={`input${id}`}>Find contacts by name</label>
      <input id={`input${id}`} type="text" value={inputValue} onChange={handleChange}/>
      <p>{inputValue}</p>

    </div>
  );
};
export default SearchBox;
