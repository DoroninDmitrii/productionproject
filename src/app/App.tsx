import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited , initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <div id="app" className={classNames('app', {}, [theme])} >
                <AppLoaderLayout />
            </div>
        )
        // return (
        //     <ToggleFeatures 
        //         feature='isAppRedesigned' 
        //         on={<AppLoaderLayout />} 
        //         off={<PageLoader />}
        //     />
        // )
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback=''>
                        <Navbar />
                        <div className='content-page'>
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div id="app" className={classNames('app_redesigned', {}, [theme])}>
                    <Suspense fallback=''>
                        <MainLayout 
                            content={<AppRouter/>} 
                            header={<Navbar/>} 
                            sidebar={<Sidebar/>}
                            // toolbar={<div>hey</div>} 
                        />
                    </Suspense>
                </div>
            }
        />
    );
};

export default App;
