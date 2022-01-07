import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

const Filter = ({ value, inputHandler }) => {
  const filterInputId = nanoid(7);

  return (
    <div>
      <label htmlFor={filterInputId}>Filter</label>
      <input
        onChange={inputHandler}
        id={filterInputId}
        value={value}
        type="text"
        name="filter"
        required
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  inputHandler: propTypes.func.isRequired,
};

export default Filter;
