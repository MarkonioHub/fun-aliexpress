import React from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import CreateCategory from "../components/CreateCategory";
import CreateProduct from "../components/CreateProduct";
import HeaderTopComp from "../components/layout/HeaderTopComp";

const NotFound = () => {
    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <div className="admin">
                <div className="admin__cont cont">
                    <CreateCategory/>
                    <CreateProduct/>
                </div>
            </div>
            <FooterComp/>
        </div>
    );
};

export default NotFound;
