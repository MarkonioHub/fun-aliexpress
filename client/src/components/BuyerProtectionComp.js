import React from 'react';

import buyer_protection_banner from "../images/buyer_protection_banner.jpg"
import ic_wallet from "../images/ic_wallet.png"

const BuyerProtectionComp = () => {
    return (
        <section className="buyer-protection">
            <div className="buyer-protection__cont cont">
                <div className="buyer-protection__banner-box">
                    <img src={buyer_protection_banner} alt="" className="buyer-protection__banner"/>
                </div>
                <div className="buyer-protection__wrapper">
                    <div className="buyer-protection__area">
                        <img src={ic_wallet} alt="" className="buyer-protection__icon"/>
                        <div className="buyer-protection__box">
                            <h1 className="buyer-protection__caption">MONEY BACK GUARANTEE</h1>
                            <p className="buyer-protection__text">
                                MONEY BACK GUARANTEEWe promise your money back if the item you received is not as
                                described, or if your item is not delivered within the Buyer Protection period. You
                                can get a refund 15 days after the claim process finishes. This guarantee is in addition
                                to and does not limit your statutory rights as a consumer, as granted by all mandatory
                                laws and regulations applicable in your country of residence.
                            </p>
                        </div>
                    </div>
                    <ul className="buyer-protection__list">
                        <li className="buyer-protection__item">
                            <h2 className="buyer-protection__title">1. Contact Seller</h2>
                            <p className="buyer-protection__text">
                                Go to your order history and select the item. Discuss the issue with the seller and see
                                possible solutions.
                            </p>
                        </li>
                        <li className="buyer-protection__item">
                            <h2 className="buyer-protection__title">2. Apply for Refund</h2>
                            <p className="buyer-protection__text">
                                If you can't come to an amicable agreement after contacting the seller, simply raise a
                                claim by opening a dispute within 15 days following the delivery of your order or the
                                end of the package receipt confirmation period (as listed in your order details).
                            </p>
                        </li>
                        <li className="buyer-protection__item">
                            <h2 className="buyer-protection__title">3. Get Money Back in 15 Days</h2>
                            <p className="buyer-protection__text">
                                Most sellers will return your money in 15 days, however; if it's not resolved, you can
                                contact AliExpress from the order detail page to escalate your dispute.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BuyerProtectionComp;
