import React from 'react';
import {PRODUCT_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";

const TileSmall = ({title, data, emptyText}) => {

    return (
        <section className="tile-small">
            <div className="tile-small__cont cont">
                {title ?
                    <h1 className="tile-small__title">{title}</h1> : ''
                }
                {data.length ?
                    <ul className="tile-small__list">
                    {data.map((product) =>
                        <Link to={PRODUCT_ROUTE + '/' + product.id} key={product.id} className="tile-small__item">
                            <picture className="tile-small__picture">
                                <img src={process.env.REACT_APP_API_URL + product.img} alt="" className="tile-small__image"/>
                            </picture>
                            <div className="tile-small__name">{product.name}</div>
                            <div className="tile-small__price">
                                <span className="tile-small__price-current">{product.price}$</span>
                                {product.oldPrice ?
                                    <div className="tile-small__price-box">
                                        <span className="tile-small__price-old">{product.oldPrice}$</span>
                                        <span className="tile-small__price-discount">-{100-Math.round(100 * product.price / product.oldPrice)}%</span>
                                    </div>
                                    :
                                    false
                                }
                            </div>
                            <div className="tile-small__info">
                                <div className="tile-small__sold">{product.order} orders</div>
                                <div className="tile-small__rating">
                                    <svg className="tile-small__rating-star" fill="#ff4747" viewBox="0 0 32 32"><path d="M15.092 2.969a1 1 0 011.816 0l3.372 7.31a1 1 0 00.79.574l7.994.947a1 1 0 01.561 1.728l-5.91 5.465a1 1 0 00-.302.93l1.57 7.895a1 1 0 01-1.47 1.067l-7.024-3.932a1 1 0 00-.977 0l-7.025 3.932a1 1 0 01-1.469-1.067l1.569-7.896a1 1 0 00-.302-.929l-5.91-5.465a1 1 0 01.561-1.728l7.994-.947a1 1 0 00.79-.575l3.372-7.31z"></path></svg>
                                    <span className="tile-small__rating-span">{product.rating}</span>
                                </div>
                            </div>
                        </Link>
                    )}
                    </ul>
                    :
                    <div>{emptyText}</div>
                }
            </div>
        </section>
    );
}

export default TileSmall;
