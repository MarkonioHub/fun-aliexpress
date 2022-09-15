import React from 'react';

import ic_benefits_1 from '../images/ic_benefits_1.png'
import ic_benefits_2 from '../images/ic_benefits_2.png'
import ic_benefits_3 from '../images/ic_benefits_3.png'
import ic_benefits_4 from '../images/ic_benefits_4.png'
import ic_benefits_5 from '../images/ic_benefits_5.png'
import ic_benefits_6 from '../images/ic_benefits_6.png'

const BenefitsComp = () => {
    const benefitsData = [
        { image: ic_benefits_1, title: 'Great value', text: 'We sell over 100 million products with discounts and promotional codes.' },
        { image: ic_benefits_2, title: 'Worldwide shopping', text: 'We ship to over 200 countries and regions, and our site comes in 12 languages.' },
        { image: ic_benefits_3, title: 'Safe payment', text: 'Pay with the world’s most popular and secure payment methods.' },
        { image: ic_benefits_4, title: 'Shop with confidence', text: 'Our Buyer Protection policy covers your entire purchase journey.' },
        { image: ic_benefits_5, title: 'Help center', text: 'Round-the-clock assistance for a smooth shopping experience.' },
        { image: ic_benefits_6, title: 'Shop better', text: 'Download the app for mobile-only features such as image search and discount games.' }
    ]
    return (
        <section className="benefits">
            <div className="benefits__cont cont">
                <ul className="benefits__list">
                    {benefitsData.map((data, i) =>
                        <li key={i} className="benefits__item">
                            <img src={data.image} className="benefits__image" alt=""/>
                            <h4 className="benefits__title">{data.title}</h4>
                            <p className="benefits__text">{data.text}</p>
                        </li>

                    )}
                </ul>
            </div>
        </section>
    );
};

export default BenefitsComp;
