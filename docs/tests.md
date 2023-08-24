## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
3. Скриншотное тестирование с loki `npm run test:ui`
4. e2e тестирование с Cypress `npm run test:e2e`

Большинство селекторов, async thunks, reducers, компонентов в модулях покрыты тестами.

Асинк санки тестируются с помощью хелпера [TestAsyncThunk](/src/shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts).

Моковые данные экспортируются из testing.ts (паблик апи для тестов).
