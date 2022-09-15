import React from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import ProductComp from "../components/ProductComp";
import HeaderTopComp from "../components/layout/HeaderTopComp";

const Product = () => {
    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <ProductComp/>
            <FooterComp/>
        </div>
    );
};

export default Product;
