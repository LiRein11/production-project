import { createSelector } from '@reduxjs/toolkit';

import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
); // Функция createSelector позволяет переиспользовать другие селекторы, которые уже есть. Но главная суть не в этом. Главная фича в том, что он мемоизирует результат. То есть он запоминает полученный результат, и пересчитывает только если значения внутри изменились.
