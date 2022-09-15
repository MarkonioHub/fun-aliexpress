import React, {useContext, useEffect, useState} from 'react';
import {BASKET_ROUTE, HOME_ROUTE, CATEGORY_ROUTE, PRODUCT_ROUTE} from "../../utils/consts";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite"
import {Context} from "../../index";

import ic_catalog from "../../images/ic_catalog.png"
import {fetchCategories} from "../../http/productAPI";
import {fetchBasket} from "../../http/basketAPI";

const HeaderComp = observer( () => {
    const {product} = useContext(Context)
    const {user} = useContext(Context)
    const {basket} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => {product.setCategories(data)})
        if (user.isAuth) fetchBasket(user.user.id).then(data => { if (data.products) basket.setProducts(data.products) })
    }, []);

    return (
        <header className="header">
            <div className="header__cont cont">
                <div className="header__bottom">
                    <div className="header__logo-wrapper">
                        <Link to={HOME_ROUTE} className="header__logo">
                            <svg viewBox="0 0 1246 302" xmlns="http://www.w3.org/2000/svg"
                                 className="header__logo-image">
                                <path
                                    d="M958.1 85.1c-8.2-3.5-17-5.2-26-5.3h-.4c-10 .1-19.8 2-28.9 5.9-8.9 3.8-16.9 9.1-23.8 16-6.9 6.8-12.3 14.8-16.1 23.7-3.9 9.2-5.9 19-6 29.1V154.8c0 10.2 2.1 20.2 6 29.5 3.8 9 9.3 17.1 16.2 24.1 6.9 7 15 12.5 24 16.4 9.3 4 19.2 6.1 29.4 6.2h.8c11.3-.1 22-2.7 32.1-7.5 9.5-4.6 17.7-11 24.6-19.1l-18.9-15.1c-4.7 5.4-10.2 9.7-16.5 12.8-6.8 3.3-14.1 5.1-21.7 5.1-5.9 0-11.6-1.1-17.1-3-5.3-1.9-10.2-4.6-14.7-8.1-4.4-3.4-8.2-7.5-11.3-12.2-3.1-4.7-5.5-9.9-7-15.3l-.3-.9H999l.1-20.8c0-9.1-1.8-17.9-5.3-26.1-3.4-8-8.2-15.2-14.4-21.3-6.1-6.2-13.3-11-21.3-14.4Zm-75.6 58.7.2-.9c1.3-5.4 3.5-10.6 6.5-15.3 3-4.6 6.6-8.7 10.9-12.1 4.3-3.4 9.1-6.1 14.3-8 5.4-1.9 11-2.9 16.8-2.9 10.6 0 20.8 4 28.6 11.1 7.8 7.1 12.7 16.8 13.8 27.2l.1.8h-91.2v.1ZM682.2 79.8c-41.6 0-75.4 33.4-75.7 74.9v146.9H632v-94c12.7 13.4 30.2 22.2 49.7 23.5h.5c41.8 0 75.7-33.9 75.7-75.7 0-39.8-30.7-72.4-69.7-75.4-.2 0-1.4-.1-1.6-.1-1.4-.1-2.9-.1-4.4-.1Zm49.9 77.8c0 27.5-22.3 49.8-49.8 49.8-27.5 0-49.8-22.3-49.8-49.8v-4c0-27.5 22.3-49.8 49.8-49.8 27.5 0 49.8 22.3 49.8 49.8v4ZM343.6 200.8V139h81.7v-24.7h-81.7V53.8h92v-26h-118v199h125.2v-26h-99.2ZM595.3 83.9h-30.2l-40.4 52.4-40.3-52.4h-30.2l55.1 71.4-55.1 71.5h30.2l40.3-52.4 40.4 52.4h30.2l-55.1-71.5 55.1-71.4ZM1107.7 155.3c-4.3-3.3-9.3-5.9-15.1-7.8-5.7-1.9-11.8-3.5-18.2-4.8-4.7-.8-9.3-1.8-13.7-3.1-4.4-1.2-8.3-2.7-11.7-4.3-3.4-1.6-6.1-3.5-8-5.7-1.9-2.1-2.9-4.8-2.9-7.8 0-3.3.9-6.2 2.6-8.8 1.7-2.6 3.9-4.7 6.6-6.3 2.7-1.6 5.7-2.9 9.1-3.7 3.4-.8 6.7-1.2 10-1.2h1.9c12.4.4 23.4 6.8 30.1 16.3l19-12.8c-10.9-15.5-28.8-25.5-49.1-25.5-7.1 0-13.6.9-20 2.8-6.4 1.8-12.1 4.5-17.2 8s-9.2 7.9-12.3 13.2c-3.1 5.3-4.6 11.5-4.6 18.4 0 7.4 1.4 13.4 4.2 18.1 2.8 4.7 6.5 8.6 11.1 11.5 4.6 3 10 5.4 16.1 7.2 6.1 1.8 12.6 3.5 19.4 4.9 3.9.8 7.7 1.7 11.4 2.8 3.7 1 7 2.4 9.8 4.2 2.9 1.7 5.2 3.8 6.9 6.3 1.7 2.5 2.6 5.6 2.6 9.5 0 3.9-.9 7.2-2.8 10-1.8 2.8-4.3 5.1-7.4 6.9-3.1 1.8-6.5 3.2-10.3 4-3.5.8-6.9 1.2-10.3 1.2-15.5 0-29.1-7.4-37.4-18.8l-19.3 15c13.6 15.8 33.9 25.9 56.5 25.9 7-.1 13.6-1 20.2-2.5 6.9-1.6 13-4.3 18.5-7.8 5.4-3.6 9.8-8.2 13.1-14 3.3-5.7 4.9-12.7 4.9-20.9 0-7.2-1.2-13.2-3.7-18.1-2.3-4.9-5.7-9-10-12.3ZM1241.6 167.6c-2.5-4.9-5.8-9-10.2-12.3-4.3-3.3-9.3-5.9-15.1-7.8-5.7-1.9-11.8-3.5-18.2-4.8-4.7-.8-9.3-1.8-13.7-3.1-4.4-1.2-8.3-2.7-11.7-4.3-3.4-1.6-6.1-3.5-8-5.7-1.9-2.2-2.9-4.8-2.9-7.8 0-3.3.9-6.2 2.6-8.8 1.7-2.6 3.9-4.7 6.6-6.3 2.7-1.6 5.7-2.9 9.1-3.7 3.4-.8 6.7-1.2 10-1.2h1.9c12.4.4 23.4 6.8 30.1 16.3v-.1l19-12.7-.1-.1h.1c-10.9-15.4-28.8-25.4-49.1-25.4h-.3c-6.8 0-13.3.9-19.7 2.8-6.4 1.8-12.1 4.5-17.2 8s-9.2 7.9-12.3 13.2c-3.1 5.3-4.6 11.5-4.6 18.4 0 7.4 1.4 13.4 4.2 18.1 2.8 4.7 6.5 8.6 11.1 11.5 4.6 3 10 5.4 16.1 7.2 6.2 1.8 12.6 3.5 19.4 4.9 3.9.8 7.7 1.7 11.4 2.8 3.7 1 7 2.4 9.8 4.1 2.9 1.7 5.2 3.8 6.9 6.3 1.7 2.5 2.6 5.6 2.6 9.5 0 3.9-.9 7.2-2.8 10-1.8 2.8-4.3 5.1-7.4 6.9-3.1 1.8-6.5 3.2-10.3 4-3.5.8-6.9 1.2-10.3 1.2h-.2c-15.2 0-28.8-7.4-37.1-18.8l-19.3 15c13.6 15.8 33.9 25.9 56.5 25.9v-.1c7-.1 13.6-.9 20.2-2.4 6.9-1.6 13-4.3 18.5-7.8 5.4-3.6 9.8-8.2 13.1-14 3.3-5.7 4.9-12.7 4.9-20.9.1-7-1.1-13.1-3.6-18ZM801.9 83.5h-25.5v143.3h25.5v-71.7c0-27.7 22.5-50.2 50.1-50.2V79.4c-19.1 0-36.6 7.2-50.1 19V83.5ZM220 27.8h-25.5v199H220v-199ZM103.3 27.7H77.1L.7 226.8h24.9L44 179h92.4l18.4 47.8h24.9L103.3 27.7ZM54 152.8l36.2-94.4 36.2 94.4H54ZM281.3 84.7h-25.5v142.1h25.5V84.7ZM268.6.4c-.6 0-1.1.5-1.1 1.1 0 20.5-16.6 37.2-37 37.2-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1 20.4 0 37 16.7 37 37.2 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1.1-20.4 16.7-37.1 37-37.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1-20.4 0-37-16.7-37-37.2v-.1c0-.3-.1-.6-.3-.8-.3-.2-.5-.3-.8-.3Z"
                                    fill="#ff2722">
                                </path>
                            </svg>
                            <div className="header__logo-text">
                                Smarter Shopping, Better Living!
                            </div>
                        </Link>
                        <div className="header__catalog">
                            <div className="header__catalog-button">
                                <img src={ic_catalog} alt="" className="header__catalog-button-image"/>
                                <span className="header__catalog-button-span">Categories</span>
                            </div>
                            <div className="header__catalog-area">
                                <ul className="header__catalog-list">
                                    {product.categories.map(category =>
                                        <li key={category.id} className="header__catalog-item">
                                            <div className="header__catalog-item-name-box">
                                                <Link className="header__catalog-item-name" to={CATEGORY_ROUTE + '/' + category.id}>{category.name}</Link>
                                            </div>
                                            <div className="header__catalog-item-toggle"></div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder="I'm looking for..." className="header__search-input"/>
                        <button className="header__search-submit">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="25px" height="25px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
                        </button>
                    </div>
                    <div className="header__icons">
                        <Link to={BASKET_ROUTE} className="header__icon-link header__icon-link_basket">
                            <span className="header__icon-count">{basket.count}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ar4">
                                <path fill="#000" d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h4a1 1 0 0 1 .986 1.164l-1.582 9.494A4 4 0 0 1 17.46 22H6.54a4 4 0 0 1-3.945-3.342L1.014 9.164A1 1 0 0 1 2 8h4V6Zm2 2h5a1 1 0 1 1 0 2H3.18l1.389 8.329A2 2 0 0 0 6.54 20h10.92a2 2 0 0 0 1.972-1.671L20.82 10H17a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z"></path>
                            </svg>
                            <div className="header__icon-span">basket</div>
                        </Link>
                        {/*<Link to={FAVORITES_ROUTE} className="header__icon-link header__icon-link_favorite">*/}
                        {/*    <span className="header__icon-count">{user.favorites.length}</span>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" className="r9g">*/}
                        {/*        <path fill="#000" d="M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Zm5 17c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z"></path>*/}
                        {/*    </svg>*/}
                        {/*    <div className="header__icon-span">favorite</div>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </header>
    );
})

export default HeaderComp;
