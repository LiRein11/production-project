import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

import { AppRouterProps } from '@/shared/types/router';
import { LoaderPage } from '@/widgets/LoaderPage';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <Suspense fallback={<LoaderPage />}>{route.element}</Suspense>;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route?.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
            // Object.values - Возвращает массив значений перечисляемых свойств объекта
        </Routes>
    );
};

export default memo(AppRouter);
