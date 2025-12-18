import '../styles/style.css';
import Header from '../../widgets/LayoutHeader/Header'
import PostList from '../../widgets/PostList/PostList'
import Footer from '../../widgets/LayoutFooter/Footer'

function MainLayout() {
    return (
        <>
            <Header />

            <main className='container'>
                <h2 style={{ textAlign: 'center' }}>Посты</h2>
                <PostList />
            </main>

            <Footer />

        </>
    );
};


export default MainLayout


