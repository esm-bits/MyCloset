import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { Actions } from '../../store';

export default function useStoreDispatch(): Dispatch<Actions> {
  const dispatch = useDispatch();
  return dispatch as Dispatch<Actions>;
}
