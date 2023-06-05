import { AppDispatch } from 'app/providers/redux';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
