import React from 'react';
import promo1 from '../../images/promo1.png'

const PromotionsBlock = () => {
    return (
        <div className='promotions-block'>
            <div className="title-row">
                <h2>Акции и предложения</h2>
                <a href="#">
                    <span>Все акции</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                            d="M9.49993 0.756906C9.49993 0.480764 9.27607 0.256906 8.99993 0.256906L4.49993 0.256906C4.22379 0.256906 3.99993 0.480764 3.99993 0.756906C3.99993 1.03305 4.22379 1.25691 4.49993 1.25691L8.49993 1.25691L8.49993 5.25691C8.49993 5.53305 8.72379 5.75691 8.99993 5.75691C9.27607 5.75691 9.49993 5.53305 9.49993 5.25691L9.49993 0.756906ZM0.868202 9.59574L9.35348 1.11046L8.64638 0.403353L0.161095 8.88863L0.868202 9.59574Z"
                            fill="#0070C9"/>
                    </svg>
                </a>
            </div>
            <div className="promotions-container">
                <div className="promotion-card">
                    <div className="img">
                        <img src={promo1} alt="promo-image"/>
                    </div>
                    <div className="promotion-card-content">
                        <div className="row">
                            <p>Премиальный кроссовер
                                по спецценам</p>
                            <span>Гарантия обратного выкупа автомобиля</span>
                        </div>
                        <a href="#">Узнать подробности</a>
                    </div>
                </div>
                <div className="promotion-card">
                    <div className="img">
                        <img src={promo1} alt="promo-image"/>
                    </div>
                    <div className="promotion-card-content">
                        <div className="row">
                            <p>Премиальный кроссовер
                                по спецценам</p>
                            <span>Гарантия обратного выкупа автомобиля</span>
                        </div>
                        <a href="#">Узнать подробности</a>
                    </div>
                </div>
                <div className="promotion-card">
                    <div className="img">
                        <img src={promo1} alt="promo-image"/>
                    </div>
                    <div className="promotion-card-content">
                        <div className="row">
                            <p>Премиальный кроссовер
                                по спецценам</p>
                            <span>Гарантия обратного выкупа автомобиля</span>
                        </div>
                        <a href="#">Узнать подробности</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionsBlock;