import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import { getUserInited, userActions } from '@/entities/User';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/consts/localstorage';
import { AppRouter } from './providers/router';

const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
    const sessionStorageIdx = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX);
    const { pathname } = useLocation();
    useEffect(() => {
        dispatch(userActions.initAuthData());
        if (!pathname.includes('/articles') && sessionStorageIdx) {
            sessionStorage.removeItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX);
        }
    }, [dispatch, pathname, sessionStorageIdx]);

    return (
        <div className={classNames('app', {}, [])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {inited && <AppRouter />}
            </div>
        </div>
    );
};

export default App;
