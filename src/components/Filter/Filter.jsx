import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/Filter/filterSlice';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      onChange={e => dispatch(setFilter(e.target.value))}
      value={filter}
    />
  );
}
