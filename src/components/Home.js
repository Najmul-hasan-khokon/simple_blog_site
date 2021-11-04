import BlogList from './BLogList';
import useFetch from './useFetch';

const Home = () => {
    const {
        data: blogs,
        loading,
        error,
    } = useFetch('https://jsonplaceholder.typicode.com/users/1/posts');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
};

export default Home;
