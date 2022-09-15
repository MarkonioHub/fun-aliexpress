import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {BUYER_PROTECTION_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const HeaderTopComp = observer(() => {

    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <div className="header__top">
            <div className="header__top-cont cont">
                <ul className="header__list">
                    <li className="header__item">
                        <Link to={BUYER_PROTECTION_ROUTE} className="header__link">Buyer Protection</Link>
                    </li>
                    <li className="header__item">
                        <div className="header__item-dropdown">
                            <img src="" alt="" className="header__item-dropdown-icon"/>
                            <span className="header__item-dropdown-span">Account</span>
                            <div className="header__item-dropdown-box">
                            {user.isAuth ?
                                <div>
                                    <div>Hello {user.user ? user.user.email : 'guest'}!</div>
                                    <button onClick={logOut}>Logout</button>
                                </div>
                                :
                                <div>
                                <div className="header__item-dropdown-box-span"></div>
                                    <div className="header__item-dropdown-box-btns">
                                        <Link to={REGISTRATION_ROUTE} className="header__item-dropdown-box-btn button-orange">Join</Link>
                                        <Link to={LOGIN_ROUTE} className="header__item-dropdown-box-btn button-orange-light">Sign In</Link>
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
});

export default HeaderTopComp;
