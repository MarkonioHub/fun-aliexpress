import React from 'react';

const FooterComp = () => {
    const footerData = [
        { title: 'Help', text: 'Something about help' },
        { title: 'AliExpress Multi-Language Sites', text: 'some list of sites' },
        { title: 'Browse by Category', text: 'Something about browse' },
        { title: 'Alibaba Group', text: 'Some info about alibaba group' },
    ]
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__cont cont">
                    <div className="footer__area">
                        {footerData.map((data, i) =>
                            <div key={i} className="footer__box">
                                <div className="footer__title">{data.title}</div>
                                <p className="footer__text">{data.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__cont cont">
                    <p className="footer__policy">
                        Privacy Policy - Sitemap - User agreements ©️ 2022 FunAliExpress. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComp;
