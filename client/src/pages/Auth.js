import React from 'react';
import HeaderTopComp from "../components/layout/HeaderTopComp";
import HeaderComp from "../components/layout/HeaderComp";
import AuthComp from "../components/AuthComp";
import FooterComp from "../components/layout/FooterComp";

const Auth = () => {
    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <AuthComp/>
            <FooterComp/>
        </div>
    );
};

export default Auth;
