import React from 'react';
import { Flex } from "@chakra-ui/react";

const FinancePaymentDetails = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <Flex className='finance-payment-details'>
            <p className='finance-payment-details-title'>Реквизиты для оплаты</p>
            <div className='row'>
                <p>НАЗНАЧЕНИЕ ПЛАТЕЖА:</p>
                <div
                    className="clickable"
                    onClick={() => copyToClipboard('Платеж по 8717-2024ФЛ от 17.01.2024, Иванов Иван Иванович')}
                    style={{cursor: 'pointer'}}
                >
                    <span>
                        Платеж по 8717-2024ФЛ от 17.01.2024, Иванов Иван Иванович
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M4 7.3335C4 5.44816 4 4.50483 4.586 3.9195C5.17133 3.3335 6.11467 3.3335 8 3.3335H10C11.8853 3.3335 12.8287 3.3335 13.414 3.9195C14 4.50483 14 5.44816 14 7.3335V10.6668C14 12.5522 14 13.4955 13.414 14.0808C12.8287 14.6668 11.8853 14.6668 10 14.6668H8C6.11467 14.6668 5.17133 14.6668 4.586 14.0808C4 13.4955 4 12.5522 4 10.6668V7.3335Z"
                            stroke="#333333" strokeWidth="1.5"/>
                        <path opacity="0.5"
                              d="M4 12.6668C3.46957 12.6668 2.96086 12.4561 2.58579 12.081C2.21071 11.706 2 11.1973 2 10.6668V6.66683C2 4.15283 2 2.8955 2.78133 2.11483C3.562 1.3335 4.81933 1.3335 7.33333 1.3335H10C10.5304 1.3335 11.0391 1.54421 11.4142 1.91928C11.7893 2.29436 12 2.80306 12 3.3335"
                              stroke="#333333" strokeOpacity="0.3" strokeWidth="1.5"/>
                    </svg>
                </div>
            </div>
            <p className="text-p">
                ООО «А-Лизинг» <br/> Юридический адрес: 220012, г. Минск,<br/> ул.Мясникова, 70-18
            </p>
            <p className="text-p">УНП 192629759</p>
            <p className="text-p">Банковские реквизиты: ЗАО «Альфа-Банк»</p>
            <div
                className="clickable"
                onClick={() => copyToClipboard('р/с BY73ALFA30112132550060270000 ')}
                style={{cursor: 'pointer'}}
            >
                    <span>
                        р/с BY73ALFA30112132550060270000
                    </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M4 7.3335C4 5.44816 4 4.50483 4.586 3.9195C5.17133 3.3335 6.11467 3.3335 8 3.3335H10C11.8853 3.3335 12.8287 3.3335 13.414 3.9195C14 4.50483 14 5.44816 14 7.3335V10.6668C14 12.5522 14 13.4955 13.414 14.0808C12.8287 14.6668 11.8853 14.6668 10 14.6668H8C6.11467 14.6668 5.17133 14.6668 4.586 14.0808C4 13.4955 4 12.5522 4 10.6668V7.3335Z"
                        stroke="#333333" strokeWidth="1.5"/>
                    <path opacity="0.5"
                          d="M4 12.6668C3.46957 12.6668 2.96086 12.4561 2.58579 12.081C2.21071 11.706 2 11.1973 2 10.6668V6.66683C2 4.15283 2 2.8955 2.78133 2.11483C3.562 1.3335 4.81933 1.3335 7.33333 1.3335H10C10.5304 1.3335 11.0391 1.54421 11.4142 1.91928C11.7893 2.29436 12 2.80306 12 3.3335"
                          stroke="#333333" strokeOpacity="0.3" strokeWidth="1.5"/>
                </svg>
            </div>
            <p className="text-p">BIC: ALFABY2X<br/>
                Адрес банка: 220030 г.Минск, ул. Сурганова, д.43, помещ.47</p>
        </Flex>
    );
};

export default FinancePaymentDetails;
