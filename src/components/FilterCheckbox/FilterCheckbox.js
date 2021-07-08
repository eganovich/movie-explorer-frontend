import './FilterCheckbox.css';

function FilterCheckbox({
  state,
  onCheck,
  onSearch,
  localStorageCheckboxKey
}) {
  function handleInputChange(evt) {
    if (evt.target.checked) {
      onCheck(true);
      localStorage.setItem(localStorageCheckboxKey, true);
    } else {
      onCheck(false);
      localStorage.setItem(localStorageCheckboxKey, false);
    }

    onSearch();
  }
  return(
    <label className="search__checkbox checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        checked={state}
        onChange={handleInputChange}
      />
      <span className="checkbox__switch" />
    </label>
  );
}

export default FilterCheckbox;