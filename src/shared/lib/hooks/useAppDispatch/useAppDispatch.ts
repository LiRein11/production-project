import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/providers/redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
