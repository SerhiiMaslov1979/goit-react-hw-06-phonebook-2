import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/Filter/filterSlice';
import { getFilter } from '../../redux/selectors';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={filter}
    />
  );
}
