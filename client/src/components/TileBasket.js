import React, {useContext, useEffect, useState} from 'react';
import {PRODUCT_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite"
import {Context} from "../index";
import {update} from "../http/basketAPI";

const TileBasket = observer(() => {

    const {user} = useContext(Context)
    const {basket} = useContext(Context)

    function basketCountDown(e, product) {
        e.preventDefault()
        if (product.quantity > 1) {
            basket.updateQuantity(product.id, product.quantity-1)
            updateBasket()
        }
    }

    function basketCountUp(e, product) {
        e.preventDefault()
        if (product.quantity < product.count) {
            basket.updateQuantity(product.id, product.quantity+1)
            updateBasket()
        }
    }

    function updateBasket() {
        const formData = new FormData()
        formData.append('id', user.user.id)
        formData.append('products', JSON.stringify(basket.products))
        update(formData).then((data) => {if (data.products) basket.setProducts(data.products);})
    }

    function deleteProduct(e, product) {
        e.preventDefault()
        for (let i = 0; i < basket.products.length; i++) {
            if (basket.products[i].id === product.id) {
                basket.products.splice(i,1)
                updateBasket()
                return
            }
        }
    }

    return (
        <section className="tile-basket">
            <div className="tile-basket__cont cont">
                <h1 className="tile-basket__title">Basket</h1>
                {basket.products.length ?
                    <div className="tile-basket__area">
                        <div className="tile-basket__list">
                            {basket.products.map((product) =>
                                <Link to={PRODUCT_ROUTE + '/' + product.id} key={product.id} className="tile-basket__item">
                                    <picture className="tile-basket__picture">
                                        <img src={process.env.REACT_APP_API_URL + product.img} alt="" className="tile-basket__image"/>
                                    </picture>
                                    <div className="tile-basket__inner">
                                        <h4 className="tile-basket__name">{product.name}</h4>
                                        <p className="tile-basket__description">{product.description}</p>
                                        <div className="tile-basket__bottom">
                                            <div className="tile-basket__bottom-left">
                                                <div className="tile-basket__price">
                                                    <span className="tile-basket__price-current">{product.price}$</span>
                                                    {product.oldPrice ?
                                                        <div className="tile-basket__price-box">
                                                            <span className="tile-basket__price-old">{product.oldPrice}$</span>
                                                            <span className="tile-basket__price-discount">-{100-Math.round(100 * product.price / product.oldPrice)}%</span>
                                                        </div>
                                                        :
                                                        false
                                                    }
                                                </div>
                                                <div className="tile-basket__info">
                                                    <div className="tile-basket__sold">{product.order} orders</div>
                                                    <div className="tile-basket__rating">
                                                        <svg className="tile-basket__rating-star" fill="#ff4747" viewBox="0 0 32 32"><path d="M15.092 2.969a1 1 0 011.816 0l3.372 7.31a1 1 0 00.79.574l7.994.947a1 1 0 01.561 1.728l-5.91 5.465a1 1 0 00-.302.93l1.57 7.895a1 1 0 01-1.47 1.067l-7.024-3.932a1 1 0 00-.977 0l-7.025 3.932a1 1 0 01-1.469-1.067l1.569-7.896a1 1 0 00-.302-.929l-5.91-5.465a1 1 0 01.561-1.728l7.994-.947a1 1 0 00.79-.575l3.372-7.31z"></path></svg>
                                                        <span className="tile-basket__rating-span">{product.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tile-basket__bottom-right">
                                                <div className="tile-basket__quantity-area">
                                                    <div className="tile-basket__quantity-inner">
                                                        <div className="tile-basket__quantity-box">
                                                            <div className={"tile-basket__quantity-button tile-basket__quantity-button_minus " + (product.quantity === 1 ? 'tile-basket__quantity-button_disabled' : '')} onClick={e => basketCountDown(e, product)}>
                                                                <svg viewBox="0 0 24 4" fill="#222" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect y="0.666748" width="24" height="2.66667" rx="1.33333"></rect>
                                                                </svg>
                                                            </div>
                                                            <div className="tile-basket__quantity-value">{product.quantity}</div>
                                                            <div className={"tile-basket__quantity-button tile-basket__quantity-button_plus " + (product.quantity === product.count ? 'tile-basket__quantity-button_disabled' : '')} onClick={e => basketCountUp(e, product)}>
                                                                <svg viewBox="0 0 24 24" fill="#222" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M13.3333 1.33314C13.3333 0.593262 12.7364 0 12 0C11.2585 0 10.6667 0.596866 10.6667 1.33314V10.6667H1.33314C0.593262 10.6667 0 11.2636 0 12C0 12.7415 0.596866 13.3333 1.33314 13.3333H10.6667V22.6669C10.6667 23.4067 11.2636 24 12 24C12.7415 24 13.3333 23.4031 13.3333 22.6669V13.3333H22.6669C23.4067 13.3333 24 12.7364 24 12C24 11.2585 23.4031 10.6667 22.6669 10.6667H13.3333V1.33314Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="tile-basket__quantity-delete" onClick={e => deleteProduct(e, product)}>
                                                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M375.168 167.168v122.88h-112v544.512c0 11.968 10.816 22.272 24.832 22.272h448c14.08 0 24.768-10.304 24.768-22.272V290.048h-112v-122.88H375.168zM688 250.88H896v46.08h-96v537.6c0 33.92-28.672 61.44-64 61.44h-448c-35.328 0-64-27.52-64-61.44v-537.6H128v-46.08h208V158.72a31.36 31.36 0 0 1 32-30.72h288c17.664 0 32 13.76 32 30.72v92.16zM576 404.48v322.56h43.52V404.48H576z m-174.848 0v322.56h43.52V404.48h-43.52z m247.68-153.6H375.168v39.168h273.664V250.88z"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="tile-basket__quantity-text">{product.count} items in stock</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                        <div className="tile-basket__box">
                            <div className="tile-basket__box-inner">
                                <h2 className="tile-basket__headline">
                                    Total price
                                </h2>
                                <div className="tile-basket__box-price">{basket.sum} $</div>
                                <div className="tile-basket__buy button-orange">Buy</div>
                            </div>
                        </div>
                    </div>
                    :
                    <p className="tile-basket__text-empty">Basket is empty. Don't miss out on great deals! Start shopping!</p>
                }
            </div>
        </section>
    );
})

export default TileBasket;
