import Header from '../../widgets/LayoutHeader/Header';
import { fetchDataPost } from '../../widgets/PostList/PostList';
import Footer from '../../widgets/LayoutFooter/Footer';
import ThemeProvider from '../lib/theme/ThemeProvider';
import PostListwithLoading from '../../widgets/PostList/PostList';


function MainLayout() {
    return (
        <>
            <Header />

            <main className='container'>
                <PostListwithLoading fetchDataPost={fetchDataPost} />
                {/* <PostList fetchDataPost={fetchDataPost} /> */}
            </main>

            <ThemeProvider />

            <Footer />

        </>
    );
};

export default MainLayout


