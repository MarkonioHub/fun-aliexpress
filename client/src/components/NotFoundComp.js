import React from 'react';
import {HOME_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";

import ic_not_found from "../images/ic_not_found.gif"

const NotFoundComp = () => {
    return (
        <section className="not-found">
            <div className="not-found__cont cont">
                <div className="not-found__area">
                    <img src={ic_not_found} alt="" className="not-found__image"/>
                    <h1 className="not-found__caption">Sorry, we can't find that page</h1>
                    <p className="not-found__text">But we still have lots for you to discover ~</p>
                    <Link to={HOME_ROUTE} className="not-found__link button-orange">back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundComp;
