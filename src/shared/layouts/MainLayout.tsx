import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import ThemeProvider from '../lib/theme/ThemeProvider';

import { Outlet } from 'react-router-dom';


function MainLayout() {
    return (
        <>
            <Header />

            <main className='container'>
                <Outlet />
            </main>

            <ThemeProvider />

            <Footer />

        </>
    );
};

export default MainLayout


