import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/myValue/slice';

export const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  return (
    <div>
      {value}
      <button onClick={() => dispatch(increment(100))}>Increment</button>
      <button onClick={() => dispatch(decrement(50))}>Decrement</button>
    </div>
  );
};
