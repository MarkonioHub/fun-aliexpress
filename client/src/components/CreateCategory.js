import React, {useState} from 'react';
import {createCategory} from "../http/productAPI";

const CreateBrand = () => {
    const [value, setValue] = useState('')

    const addCategory = () => {
        createCategory({name: value}).then(data => {
            window.location.reload()
        })
    }
    return (
        <div className="admin__box">
            <h2 className="admin__title">Add category</h2>
            <div className="admin__form">
                <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder={"category name"} className="admin__input"/>
                <button onClick={addCategory}>create category</button>
            </div>
        </div>
    );
};

export default CreateBrand;
