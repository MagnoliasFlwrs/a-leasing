import React from 'react';
import letter from '../../images/letter.png'

const MainPageAboutBlock = () => {
    return (
        <div className='about-block' id='about'>
            <p className="title">А-Лизинг - 8 лет успешного развития</p>
            <div className="text-block">
                <p>
                    <span>ООО “А-Лизинг”</span> - лизинговая компания, образованная в 2016 году, входящая в консорциум “Альфа-Групп”
                </p>
                <p>
                    <span>1-я лизинговая компания в Беларуси</span>, получившая самы высокий ESG-рейтинг на уровне “A.esg” (прогноз стабильный).
                </p>
                <p>
                    <span>2-ое место</span> в сегменте “Инвестиционный лизинг” - легковой автотранспорт в 2023 году.
                </p>
                <p>
                    <span>3-е место</span> в сегменте “Инвестиционный лизинг” - здания и сооружения в 2023 году.
                </p>
                <p>
                    <span>Кредитный рейтинг на уровне by.A+</span>, по результатам независимой оценки рейтингового агентства BIK Ratings.
                </p>
                <p>
                    <span>98% заявок </span>- проходят одобрение<br/>
                    <span>1 день</span> на оформление сделки с передачей ключей клиенту
                </p>
            </div>
            <img src={letter} alt="letter"/>
        </div>
    );
};

export default MainPageAboutBlock;