import React, {useContext, useEffect, useState} from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import TileSmall from "../components/TileSmall";
import HeaderTopComp from "../components/layout/HeaderTopComp";
import {fetchCategories, fetchProducts} from "../http/productAPI";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Category = observer(() => {

    const { product } = useContext(Context)
    let { id } = useParams();
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetchProducts(id, 1, 12).then(data => {setProducts(data)})
        fetchCategories().then(data => {
            product.setCategories(data)
            const activeCategory = product.categories.find(item => item.id === Number(id))
            setTitle(activeCategory.name)
        })
    }, [id])

    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            {products.rows ?
                <TileSmall data={products.rows} title={title}/>
                :
                ''
            }
            <FooterComp/>
        </div>
    );
});

export default Category;
