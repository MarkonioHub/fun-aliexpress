import React, {useEffect, useState} from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import BenefitsComp from "../components/BenefitsComp";
import TileSmall from "../components/TileSmall";
import SliderComp from "../components/SliderComp";
import HeaderTopComp from "../components/layout/HeaderTopComp";
import {fetchProducts} from "../http/productAPI";

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts(null, 1, 24).then(data => {setProducts(data); })
    }, []);

    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <SliderComp/>
            {products.rows ?
                <TileSmall title="New Products" data={products.rows}/>
                :
                ''
            }
            <BenefitsComp/>
            <FooterComp/>
        </div>
    );
};

export default Home;
