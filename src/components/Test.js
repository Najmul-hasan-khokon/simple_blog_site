import BlogList from './BLogList';
import useFetch from './useFetch';

const Test = () => {
    const {
        data: blogs,
        loading,
        error,
    } = useFetch('https://jsonplaceholder.typicode.com/users/1/todos');

    // 5 ta blog dekhabe
    const filteringData = blogs.filter((value) => value.id === 5 || value.id === 15);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={filteringData} />}
        </div>
    );
};

export default Test;
