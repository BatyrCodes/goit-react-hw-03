import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <input
        className={s.search}
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
