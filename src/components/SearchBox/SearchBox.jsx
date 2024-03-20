const SearchBox = ({ onInputChange, filterValue }) => {
  const oninputValueChange = (e) => {
    onInputChange(e.target.value);
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={oninputValueChange} value={filterValue} />
    </>
  );
};

export default SearchBox;
