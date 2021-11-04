import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => (
    <div className="blog-list">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                {/* click korle jate blogs page e jay ebong id tao dekhay. */}
                <Link to={`/blogs/${blog.id}`}>
                    <h2 style={{ marginBottom: '20px' }}>{blog.title}</h2>
                    {/* <h3 style={{ marginBottom: '15px' }}>{blog.body}</h3> */}
                    <p>Written by Najmul Hasan</p>
                </Link>
            </div>
        ))}
    </div>
);
export default BlogList;
