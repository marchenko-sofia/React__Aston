import Header from '../../widgets/LayoutHeader/Header'
import PostList from '../../widgets/PostList/PostList'
import Footer from '../../widgets/LayoutFooter/Footer'
import ThemeProvider from '../lib/theme/ThemeProvider';

function MainLayout() {
    return (
        <>
            <Header />

            <main className='container'>
                <PostList />
            </main>

            <ThemeProvider />

            <Footer />

        </>
    );
};


export default MainLayout


