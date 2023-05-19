import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { LoaderPage } from 'widgets/LoaderPage';

const AppRouter = () => (
    <Suspense fallback={<LoaderPage />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={<div className="page-wrapper">{element}</div>}
                    path={path}
                />
            ))}
            // Object.values - Возвращает массив значений перечисляемых свойств
            объекта
        </Routes>
    </Suspense>
);

export default AppRouter;
