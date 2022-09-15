import React, {useContext, useEffect} from 'react';
import HeaderComp from "../components/layout/HeaderComp";
import FooterComp from "../components/layout/FooterComp";
import TileSmall from "../components/TileSmall";
import HeaderTopComp from "../components/layout/HeaderTopComp";
import {Context} from "../index";
import {observer} from "mobx-react-lite"

const Favorites = observer(() => {
    const {user} = useContext(Context)

    return (
        <div>
            <HeaderTopComp/>
            <HeaderComp/>
            <TileSmall title="Избранное" data={user.favorites} emptyText="Favorites are empty."/>
            <FooterComp/>
        </div>
    );
});

export default Favorites;
