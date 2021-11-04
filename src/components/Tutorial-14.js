/* eslint-disable no-unused-vars */
import { useState } from 'react/cjs/react.development';

const Tutorial = () => {
    const [Delete, setDelete] = useState([
        { name: 'najmul', age: '21', id: 1 },
        { name: 'karim', age: '8', id: 2 },
    ]);

    const handlerDelete = (id) => {
        const newDelete = Delete.filter((Deletes) => Deletes.id !== id);
        setDelete(newDelete);
    };
    console.log(Delete[1].name);

    return (
        <div>
            {Delete.map((Deletes) => (
                <div key={Deletes.id}>
                    <h1>{Delete.name}</h1>
                    <p>{Delete.age}</p>

                    <button type="button" onClick={() => handlerDelete(Delete.id)}>
                        click me
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Tutorial;
