import './FilterCheckbox.css';

function FilterCheckbox() {


  return(
    <label className="search__checkbox checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
      />
      <span className="checkbox__switch" />
    </label>
  );
}

export default FilterCheckbox;