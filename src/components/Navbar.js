import { Link } from 'react-router-dom';

const Navbar = () => (
    // const name = "The Najmul's Blog";
    <>
        <nav className="navbar">
            <Link to="/">
                <h1>{" Najmul's Blog "}</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                <Link
                    to="/create"
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px',
                    }}
                >
                    New Blog
                </Link>
            </div>
        </nav>
    </>
);
export default Navbar;
