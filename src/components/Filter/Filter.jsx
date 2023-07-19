import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';
import './Filter.module.css';

export const Filter = () => {
const dispatch = useDispatch();
  const filter = useSelector(getFilter);


  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={e => dispatch(setFilter(e.target.value))} />
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   changeFilterInput: PropTypes.func,
// };