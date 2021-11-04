import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const [deleting, setDeleting] = useState();
    const { id } = useParams();
    const history = useHistory();

    // blog e click korle details e asbe
    const {
        data: blog,
        error,
        loading,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const handleClick = () => {
        setDeleting(true);
        fetch(`https://jsonplaceholder.typicode.com/users/1/posts${blog.id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
            setDeleting(false);
        });
    };

    return (
        <div className="blog-details">
            {error && <div> {error} </div>}
            {loading && <div> Loading...</div>}
            {blog && (
                <div className="blog-preview">
                    <h1 style={{ marginBottom: '20px' }}>Blog details - {id}</h1>
                    <h2>{blog.title}</h2>
                    <h4>{blog.body}</h4>
                    {!deleting && (
                        <button type="button" onClick={handleClick}>
                            Delete
                        </button>
                    )}
                    {deleting && (
                        <button type="button" onClick={handleClick}>
                            Deleting Blog....
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default BlogDetails;
