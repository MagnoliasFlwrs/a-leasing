import React, {useEffect, useState} from 'react';

const IpAdminisrtativeInfo = ({data}) => {
    const [visibleNote, setVisibleNote] = useState(null);

    const toggleNoteVisibility = (note) => {
        setVisibleNote(visibleNote === note ? null : note);
    };
    const { administrativeFinancialInfo:
        {   hadEconomicSanctions,
            hadEconomicSanctionsNote ,
            isDefendantOrDebtor,
            isDefendantOrDebtorNote ,
            notComplyWithCourtOrders,
            notComplyWithCourtOrdersNote,
            participationInTheStageOfLiquidation,
            participationInTheStageOfLiquidationNote } = {} } = data || {};
    function boxHandler(e) {
        e.preventDefault();
        let currentBox = e.target.closest(".box");
        let currentContent = currentBox.querySelector('.content .info-container');

        currentBox.classList.toggle("active");

        if (currentBox.classList.contains("active")) {
            currentContent.style.transition = '.8s ease;'
            currentContent.style.maxHeight = '800px';
        } else {
            currentContent.style.transition = '.8s ease;'
            currentContent.style.maxHeight = 0;
        }
    }

    return (
        <div className='private-info-block'>
            <div className="accordeon">
                <div className="box" onClick={(event) => boxHandler(event)}>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Наличие/отсутствие убытков</p>
                            <ul className='info-container'>
                                <li>
                                    <span>Наличие чистого убытка за 3 последних полных месяца (для ИП, которые ведут бухучет и используют упрощенную систему налогообложения)</span>
                                    <span>{data?.lossInfo?.netLossForTheLast3Months}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="label">
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordeon">
                <div className="box" >
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Административно-финансовый блок</p>
                            <ul className='info-container'>
                                {notComplyWithCourtOrders?.toLowerCase() === 'да' ? (
                                    <li className='adm-block'>
                                        <div className="head-block">
                                            <span>Имеются ли судебные постановления, приговоры, постановления об административном правонарушении, которые Клиент не исполнил?</span>
                                            <div className="wrap">
                                                <span className='val'>{notComplyWithCourtOrders}</span>
                                                <span
                                                    className="btn"
                                                    onClick={() => toggleNoteVisibility('notComplyWithCourtOrdersNote')}
                                                >
                                                    {visibleNote === 'notComplyWithCourtOrdersNote' ? 'Свернуть' : 'Подробнее'}

                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className={`note ${visibleNote === 'notComplyWithCourtOrdersNote' ? 'visible' : ''}`}>
                                            <span>{notComplyWithCourtOrdersNote}</span>
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <span>Имеются ли судебные постановления, приговоры, постановления об административном правонарушении, которые Клиент не исполнил?</span>
                                        <span>{notComplyWithCourtOrders}</span>
                                    </li>
                                )}

                                {isDefendantOrDebtor?.toLowerCase() === 'да' ? (
                                    <li className='adm-block'>
                                        <div className="head-block">
                                            <span>Является ли Клиент/поручитель ответчиком, должником в хозяйственном, уголовном процессе, гражданском судопроизводстве либо лицом, в отношении которого ведётся административный процесс? </span>
                                            <div className="wrap">
                                                <span className='val'>{isDefendantOrDebtor}</span>
                                                <span
                                                    className="btn"
                                                    onClick={() => toggleNoteVisibility('isDefendantOrDebtorNote')}
                                                >
                                {visibleNote === 'isDefendantOrDebtorNote' ? 'Свернуть' : 'Подробнее'}
                            </span>
                                            </div>
                                        </div>
                                        <div
                                            className={`note ${visibleNote === 'isDefendantOrDebtorNote' ? 'visible' : ''}`}>
                                            <span>{isDefendantOrDebtorNote}</span>
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <span>Является ли Клиент/поручитель ответчиком, должником в хозяйственном, уголовном процессе, гражданском судопроизводстве либо лицом, в отношении которого ведётся административный процесс? </span>
                                        <span>{isDefendantOrDebtor}</span>
                                    </li>
                                )}

                                {hadEconomicSanctions?.toLowerCase() === 'да' ? (
                                    <li className='adm-block'>
                                        <div className="head-block">
                                            <span>Применялись ли к Клиенту/поручителю экономические (финансовые) санкции в течение календарного года?</span>
                                            <div className="wrap">
                                                <span className='val'>{hadEconomicSanctions}</span>
                                                <span
                                                    className="btn"
                                                    onClick={() => toggleNoteVisibility('hadEconomicSanctionsNote')}
                                                >
                                {visibleNote === 'hadEconomicSanctionsNote' ? 'Свернуть' : 'Подробнее'}
                            </span>
                                            </div>
                                        </div>
                                        <div
                                            className={`note ${visibleNote === 'hadEconomicSanctionsNote' ? 'visible' : ''}`}>
                                            <span>{hadEconomicSanctionsNote}</span>
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <span>Применялись ли к Клиенту/поручителю экономические (финансовые) санкции в течение календарного года?</span>
                                        <span>{hadEconomicSanctions}</span>
                                    </li>
                                )}

                                {participationInTheStageOfLiquidation?.toLowerCase() === 'да' ? (
                                    <li className='adm-block'>
                                        <div className="head-block">
                                            <span>Участие Клиента/поручителя в субъектах хозяйствования находящихся в стадии ликвидации (банкротства).</span>
                                            <div className="wrap">
                                                <span className='val'>{participationInTheStageOfLiquidation}</span>
                                                <span
                                                    className="btn"
                                                    onClick={() => toggleNoteVisibility('participationInTheStageOfLiquidationNote')}
                                                >
                                {visibleNote === 'participationInTheStageOfLiquidationNote' ? 'Свернуть' : 'Подробнее'}
                            </span>
                                            </div>
                                        </div>
                                        <div
                                            className={`note ${visibleNote === 'participationInTheStageOfLiquidationNote' ? 'visible' : ''}`}>
                                            <span>{participationInTheStageOfLiquidationNote}</span>
                                        </div>
                                    </li>
                                ) : (
                                    <li>
                                        <span>Участие Клиента/поручителя в субъектах хозяйствования находящихся в стадии ликвидации (банкротства).</span>
                                        <span>{participationInTheStageOfLiquidation}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="label" onClick={(event) => boxHandler(event)}>
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordeon">
                <div className="box" onClick={(event) => boxHandler(event)}>
                    <div className="content">
                        <div className="box-content-wrapper">
                            <p className="title">Сведения о выручке за последние 12 календарных месяцев</p>
                            <ul className='info-container'>
                                <li>
                                    <span>1 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m1}</span>
                                </li>
                                <li>
                                    <span>2 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m2}</span>
                                </li>
                                <li>
                                    <span>3 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m3}</span>
                                </li>
                                <li>
                                    <span>4 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m4}</span>
                                </li>
                                <li>
                                    <span>5 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m5}</span>
                                </li>
                                <li>
                                    <span>6 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m6}</span>
                                </li>
                                <li>
                                    <span>7 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m7}</span>
                                </li>
                                <li>
                                    <span>8 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m8}</span>
                                </li>
                                <li>
                                    <span>9 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m9}</span>
                                </li>
                                <li>
                                    <span>10 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m10}</span>
                                </li>
                                <li>
                                    <span>11 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m11}</span>
                                </li>
                                <li>
                                    <span>12 месяц</span>
                                    <span>{data?.revenueInfo?.revenueInfo?.m12}</span>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="label">
                        <div className="label-cont">
                            <span>Редактировать</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11"
                                 fill="none">
                                <path
                                    d="M9.98528 1.19831C9.98528 0.92217 9.76142 0.698312 9.48528 0.698312L4.98528 0.698313C4.70914 0.698312 4.48528 0.92217 4.48528 1.19831C4.48528 1.47445 4.70914 1.69831 4.98528 1.69831L8.98528 1.69831L8.98528 5.69831C8.98528 5.97445 9.20914 6.19831 9.48528 6.19831C9.76142 6.19831 9.98528 5.97445 9.98528 5.69831L9.98528 1.19831ZM1.35355 10.0371L9.83883 1.55187L9.13173 0.844759L0.646447 9.33004L1.35355 10.0371Z"
                                    fill="#0070C9"/>
                            </svg>
                        </div>
                        <div className="show-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 24.9414C18.6274 24.9414 24 19.5688 24 12.9414C24 6.31399 18.6274 0.941406 12 0.941406C5.37258 0.941406 0 6.31399 0 12.9414C0 19.5688 5.37258 24.9414 12 24.9414ZM13 6.94141C13 6.38912 12.5523 5.94141 12 5.94141C11.4477 5.94141 11 6.38912 11 6.94141V11.9414H10H6C5.44772 11.9414 5 12.3891 5 12.9414C5 13.4937 5.44772 13.9414 6 13.9414H10H11L11 18.9414C11 19.4937 11.4477 19.9414 12 19.9414C12.5523 19.9414 13 19.4937 13 18.9414L13 13.9414H14L18 13.9414C18.5523 13.9414 19 13.4937 19 12.9414C19 12.3891 18.5523 11.9414 18 11.9414L14 11.9414H13V6.94141Z"
                                      fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IpAdminisrtativeInfo;