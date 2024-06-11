import React, { useState, useRef, useEffect } from 'react';

const PaymentHistory = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const months = ['Январь', '', '', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];

    return (
        <div
            className={`payment-history-box ${isExpanded ? 'expanded' : ''}`}
        >
            <ul>
                {months.map((item, index) => (
                    // <li key={index} className={index >= 5 && !showAll ? 'hidden' : ''}>
                    //     <p className="month">{item}</p>
                    //     <p className="date">01.05.2024</p>
                    //     <div className="payment">
                    //         <p className="summ">$ 900.17</p>
                    //         <p className="status">Оплачено</p>
                    //     </div>
                    // </li>
                    <li key={index} >
                        <p className="month">{item}</p>
                        <p className="date">01.05.2024</p>
                        <div className="payment">
                            <p className="summ">$ 900.17</p>
                            <p className="status">Оплачено</p>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="show-more" onClick={handleToggle}>
                {isExpanded ? 'Свернуть' : 'Развернуть список'}
            </p>
        </div>
    );
};

export default PaymentHistory;
