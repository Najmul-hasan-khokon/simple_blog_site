/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('najmul');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };
        setLoading(true);
        fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        })
            .then(() => {
                setLoading(false);
                // history.go(-1);  eta immadiey history ta dekhabe.
                history.push('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="karim">karim</option>
                    <option value="rasel">rasel</option>
                    <option value="najmul">najmul</option>
                </select>

                {!loading && <button type="submit">Add Blog</button>}
                {loading && (
                    <button type="submit" disabled>
                        Adding Blog....
                    </button>
                )}
            </form>
        </div>
    );
};

export default Create;
