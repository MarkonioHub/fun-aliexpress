import React, {useState, useEffect, useContext} from 'react';
import {Context} from "../index";
import {useNavigate, useParams, Link} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {createProduct, fetchOneProduct} from "../http/productAPI";
import {update} from "../http/basketAPI";
import {observer} from "mobx-react-lite";

const ProductComp = observer(() => {

    const {id} = useParams()
    const navigation = useNavigate()
    const [product, setProduct] = useState({})
    const [isProductInbasket, setIsProductInbasket] = useState(false)
    const [count, setCount] = useState(1)

    const {user} = useContext(Context)
    const {basket} = useContext(Context)

    useEffect(() => {
        fetchOneProduct(id).then(data => {setProduct(data); })
    }, []);

    useEffect(() => {
        if (basket.products.find(item => item.id === product.id)) {
            setIsProductInbasket(true)
        } else {
            setIsProductInbasket(false)
        }
    }, [basket.products]);

    function addProductToBasket() {
        if (!user.isAuth) {
            navigation(LOGIN_ROUTE)
        } else {
            const newProduct = new Object(product)
            newProduct.quantity = count
            const newProducts = [...basket.products, newProduct]
            const formData = new FormData()
            formData.append('id', user.user.id)
            formData.append('products', JSON.stringify(newProducts))
            update(formData).then((data) => {if (data.products) basket.setProducts(data.products); alert('product success added')})
        }
    }

    function productCountDown() {
        if (count > 1) setCount(count - 1)
    }

    function productCountUp() {
        if (count < product.count) setCount(count + 1)
    }

    return (
        <section className="product">
            <div className="product__cont cont">
                <div className="product__area">
                    <div className="product__slider">
                        <picture className="product__slider-picture">
                            {product.img ?
                                <img src={process.env.REACT_APP_API_URL + product.img} alt="" className="product__slider-image"/>
                                :
                                ''
                            }
                        </picture>
                    </div>
                    <div className="product__box">
                        <h1 className="product__title">{product.name}</h1>
                        <h2 className="product__description">
                            {product.description}
                        </h2>
                        <div className="product__reviews">
                            <div className="product__reviews-stars">
                                <div className="product__reviews-stars-orange" style={{width: `${product.rating * 100 / 5}%`}}></div>
                                <div className="product__reviews-stars-gray"></div>
                            </div>
                            <span className="product__reviews-value">{product.rating}</span>
                            <span className="product__reviews-orders">{product.order} orders</span>
                        </div>
                        <div className="product__price">
                            <span className="product__price-current">{product.price} $</span>
                            {product.oldPrice ?
                                <div className="tile-small__price-box">
                                    <span className="product__price-old">{product.oldPrice} $</span>
                                    <span className="product__price-discount">
                                        -{100 - Math.round(100 * product.price / product.oldPrice)}%
                                    </span>
                                </div>
                                :
                                false
                            }
                        </div>
                        <div className="product__quantity">
                            <div className="product__headline">Quantity:</div>
                            <div className="product__quantity-area">
                                <div className="product__quantity-box">
                                    <div className={"product__quantity-button product__quantity-button_minus " + (count === 1 ? 'product__quantity-button_disabled' : '')} onClick={productCountDown}>
                                        <svg viewBox="0 0 24 4" fill="#222" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.666748" width="24" height="2.66667" rx="1.33333"></rect>
                                        </svg>
                                    </div>
                                    <div className="product__quantity-value">{count}</div>
                                    <div className={"product__quantity-button product__quantity-button_plus " + (count === product.count ? 'product__quantity-button_disabled' : '')} onClick={productCountUp}>
                                        <svg viewBox="0 0 24 24" fill="#222" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3333 1.33314C13.3333 0.593262 12.7364 0 12 0C11.2585 0 10.6667 0.596866 10.6667 1.33314V10.6667H1.33314C0.593262 10.6667 0 11.2636 0 12C0 12.7415 0.596866 13.3333 1.33314 13.3333H10.6667V22.6669C10.6667 23.4067 11.2636 24 12 24C12.7415 24 13.3333 23.4031 13.3333 22.6669V13.3333H22.6669C23.4067 13.3333 24 12.7364 24 12C24 11.2585 23.4031 10.6667 22.6669 10.6667H13.3333V1.33314Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="product__quantity-text">{product.count} items in stock</div>
                            </div>
                        </div>
                        <div className="product__buttons">
                            {isProductInbasket ?
                                <Link className="product__card button-orange" to={BASKET_ROUTE}>Go to cart</Link>
                                :
                                <div className="product__card button-orange" onClick={addProductToBasket}>Add to cart</div>
                            }

                            {/*<div className={"product__like " + (isFavorite ? 'product__like_active' : '')} onClick={addProductToFavorites}>*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg">*/}
                            {/*        <path fill="#000" d="M7 5a4 4 0 0 0-4 4c0 3.552 2.218 6.296 4.621 8.22A21.525 21.525 0 0 0 12 19.91a21.58 21.58 0 0 0 4.377-2.69C18.78 15.294 21 12.551 21 9a4 4 0 0 0-4-4c-1.957 0-3.652 1.396-4.02 3.2a1 1 0 0 1-1.96 0C10.652 6.396 8.957 5 7 5Zm5 17c-.316-.02-.56-.147-.848-.278a23.542 23.542 0 0 1-4.781-2.942C3.777 16.705 1 13.449 1 9a6 6 0 0 1 6-6 6.183 6.183 0 0 1 5 2.568A6.183 6.183 0 0 1 17 3a6 6 0 0 1 6 6c0 4.448-2.78 7.705-5.375 9.78a23.599 23.599 0 0 1-4.78 2.942c-.543.249-.732.278-.845.278Z"></path>*/}
                            {/*    </svg>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ProductComp;
