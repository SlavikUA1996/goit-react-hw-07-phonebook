import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice';
import { getFilter } from 'redux/selectors';
import './Filter.module.css';

export const Filter = () => {
const dispatch = useDispatch();
  const filter = useSelector(getFilter);

const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   changeFilterInput: PropTypes.func,
// };