import React from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import NotFoundComp from "../components/NotFoundComp";
import HeaderTopComp from "../components/layout/HeaderTopComp";

const NotFound = () => {
    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <NotFoundComp/>
            <FooterComp/>
        </div>
    );
};

export default NotFound;
