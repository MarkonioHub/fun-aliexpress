import React, {useEffect} from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import TileBasket from "../components/TileBasket";
import HeaderTopComp from "../components/layout/HeaderTopComp";

const Basket = () => {

    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <TileBasket/>
            <FooterComp/>
        </div>
    );
};

export default Basket;
