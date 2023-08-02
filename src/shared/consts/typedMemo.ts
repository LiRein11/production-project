import { memo } from 'react';

export const typedMemo: <T>(param: T) => T = memo; // Для адекватной работы компонента с дженериками.
