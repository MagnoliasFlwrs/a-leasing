import React from 'react';
import '../../../styles/insuranceBlock.css'
import {ChevronDownIcon} from "@chakra-ui/icons";
import {Select} from "@chakra-ui/react";
import img from '../../../images/insurance.png'

const InsuranceBlock = () => {
    const showModal = () => {
        document.querySelector('.custom-modal').classList.add('open');
        document.querySelector('.overlay').classList.add('open');
    }
    return (
        <>
            <div className='insurance-block'>
                <div className="info-block">
                    <Select className='document-container-select'
                            icon={<ChevronDownIcon/>}
                            placeholder='Mazda 3 2020 г.в. JN1WNYD21U00000'
                    >
                        <option value='option1'>Mazda 6 2020 г.в. JN1WNYD21U00000</option>
                        <option value='option2'>Mazda 3 2020 г.в. JN1WNYD21U00000</option>
                    </Select>
                    <div className="ins-company">
                        <div className="row">
                            <p className="title">
                                Страховая компания <br/>
                                <span>Промтрансинвест</span>
                            </p>
                            <span className="status">Действителен</span>
                        </div>
                        <div className="info">
                            <a href="#">Памятка по страховым случаям</a>
                            <p>Страховой полис №0000000 <br/>
                                Период действия с 12.05.2023 по 12.05.2024</p>
                        </div>
                    </div>
                    <div className="ins-center">
                        <p className="title">
                            Центр <br/>
                            урегулирования<br/>
                            страхового случая
                        </p>
                        <p className="text">Вы можете связаться со службой урегулирования <br/> страхового случая
                            «А-Лизинг»<br/>
                            или оставить заявку</p>
                        <div className="links">
                            <a href="tel:+375445700052">+375 (44) 570-00-52</a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <g clipPath="url(#clip0_6716_11358)">
                                        <path
                                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                            fill="#7360F2"/>
                                        <path
                                            d="M17.8583 6.71173C17.4859 6.3681 15.981 5.2756 12.6288 5.26076C12.6288 5.26076 8.67574 5.02238 6.74868 6.78999C5.67596 7.86293 5.2986 9.43287 5.2588 11.3793C5.21899 13.3257 5.16749 16.9734 8.68361 17.9624H8.68698L8.68473 19.4716C8.68473 19.4716 8.66225 20.0826 9.06457 20.2072C9.55123 20.3584 9.83683 19.894 10.3015 19.3934C10.5565 19.1186 10.9086 18.7149 11.174 18.4063C13.5787 18.6087 15.4282 18.1461 15.6383 18.0778C16.1238 17.9204 18.8712 17.5682 19.3181 13.921C19.7793 10.1615 19.095 7.78355 17.8583 6.71173ZM18.2658 13.6513C17.8887 16.6967 15.6603 16.8881 15.2494 17.0199C15.0747 17.0761 13.4503 17.4802 11.4077 17.3469C11.4077 17.3469 9.88563 19.1831 9.41022 19.6605C9.33601 19.7352 9.24875 19.7653 9.19051 19.7505C9.10865 19.7305 9.08616 19.6335 9.08706 19.4919C9.08841 19.2895 9.1001 16.9839 9.1001 16.9839C9.0983 16.9839 9.1001 16.9839 9.1001 16.9839C6.12574 16.1581 6.29913 13.0536 6.33286 11.4278C6.36659 9.80214 6.67199 8.47035 7.57919 7.57463C9.20917 6.09824 12.567 6.31885 12.567 6.31885C15.4026 6.33122 16.7613 7.18512 17.0764 7.47118C18.1226 8.3669 18.6556 10.5103 18.2658 13.6504V13.6513Z"
                                            fill="white"/>
                                        <path
                                            d="M12.8855 9.93361C13.7023 9.97623 14.1563 10.4456 14.198 11.285C14.2031 11.3896 14.1226 11.4785 14.018 11.4837C13.9134 11.4889 13.8244 11.4083 13.8193 11.3038C13.7871 10.6562 13.4858 10.3446 12.8657 10.3123C12.7612 10.3068 12.6808 10.2176 12.6863 10.1131C12.6918 10.0085 12.7809 9.92816 12.8855 9.93361Z"
                                            fill="white"/>
                                        <path
                                            d="M12.6019 8.91629C13.4091 8.97536 14.045 9.25331 14.5056 9.75616C14.9648 10.2579 15.1868 10.8842 15.1708 11.6244C15.1685 11.7291 15.0819 11.8121 14.9772 11.8098C14.8725 11.8075 14.7895 11.7209 14.7917 11.6162C14.8057 10.9711 14.6174 10.4399 14.226 10.0122C13.8346 9.585 13.2897 9.3468 12.5742 9.29443C12.4698 9.28679 12.3913 9.19595 12.399 9.09152C12.4066 8.9871 12.4974 8.90864 12.6019 8.91629Z"
                                            fill="white"/>
                                        <path
                                            d="M12.2551 7.93238C13.358 7.94006 14.2871 8.30806 15.0319 9.03418C15.7795 9.76291 16.1571 10.7583 16.1666 12.0084C16.1674 12.1131 16.0832 12.1986 15.9785 12.1994C15.8738 12.2002 15.7883 12.116 15.7875 12.0113C15.7787 10.8575 15.438 9.95957 14.7673 9.30568C14.0938 8.64919 13.259 8.31854 12.2525 8.31153C12.1478 8.3108 12.0635 8.22534 12.0642 8.12064C12.0649 8.01594 12.1504 7.93165 12.2551 7.93238Z"
                                            fill="white"/>
                                        <path
                                            d="M12.9132 13.8334C12.9132 13.8334 13.1797 13.8559 13.3232 13.6792L13.6029 13.3272C13.7379 13.1527 14.0635 13.0414 14.3824 13.2191C14.6214 13.3553 14.8534 13.5035 15.0775 13.663C15.2891 13.8186 15.7225 14.1802 15.7238 14.1802C15.9303 14.3545 15.978 14.6104 15.8374 14.8803C15.8374 14.8819 15.8363 14.8846 15.8363 14.8859C15.6815 15.1543 15.4849 15.3963 15.2541 15.6029C15.2514 15.6042 15.2514 15.6056 15.2489 15.6069C15.0483 15.7745 14.8512 15.8698 14.6577 15.8927C14.6292 15.8977 14.6002 15.8995 14.5713 15.8981C14.4859 15.899 14.401 15.8859 14.3199 15.8595L14.3136 15.8502C14.0154 15.7661 13.5175 15.5556 12.6883 15.0982C12.2085 14.8366 11.7517 14.5349 11.3228 14.1962C11.1078 14.0265 10.9028 13.8447 10.7086 13.6515L10.6879 13.6308L10.6672 13.6101L10.6466 13.5894C10.6396 13.5827 10.6328 13.5757 10.6259 13.5688C10.4327 13.3746 10.2509 13.1696 10.0812 12.9546C9.74256 12.5257 9.44081 12.069 9.17917 11.5893C8.72175 10.7599 8.51125 10.2625 8.42714 9.9638L8.41792 9.95751C8.39156 9.87634 8.37857 9.79142 8.37947 9.70608C8.37789 9.67719 8.37963 9.64822 8.38464 9.61973C8.40878 9.42647 8.50421 9.22925 8.67092 9.02805C8.67227 9.02557 8.67362 9.02557 8.67497 9.02287C8.88148 8.79198 9.12351 8.59551 9.39191 8.44086C9.39326 8.44086 9.39596 8.43952 9.39753 8.43952C9.6674 8.29896 9.92332 8.34664 10.0974 8.55196C10.0987 8.55331 10.4597 8.98667 10.6146 9.19829C10.7741 9.42266 10.9223 9.65489 11.0586 9.89409C11.2362 10.2128 11.1249 10.5391 10.9504 10.6735L10.5984 10.9533C10.4208 11.0968 10.4442 11.3633 10.4442 11.3633C10.4442 11.3633 10.9655 13.3362 12.9132 13.8334Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6716_11358">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <g clipPath="url(#clip0_6716_11368)">
                                        <path
                                            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                            fill="url(#paint0_linear_6716_11368)"/>
                                        <path
                                            d="M5.43177 11.8733C8.93001 10.3492 11.2627 9.34435 12.4299 8.85889C15.7624 7.47277 16.4549 7.23199 16.9062 7.22395C17.0055 7.22229 17.2275 7.24689 17.3712 7.36356C17.4926 7.46206 17.526 7.59513 17.542 7.68853C17.558 7.78193 17.5779 7.99469 17.5621 8.16093C17.3815 10.0584 16.6001 14.6631 16.2026 16.7883C16.0343 17.6876 15.7031 17.9891 15.3825 18.0186C14.6856 18.0827 14.1564 17.5581 13.4815 17.1156C12.4253 16.4233 11.8287 15.9923 10.8035 15.3168C9.61872 14.536 10.3868 14.1069 11.062 13.4056C11.2387 13.2221 14.3091 10.4293 14.3685 10.176C14.3759 10.1443 14.3828 10.0262 14.3126 9.9638C14.2425 9.90144 14.1389 9.92277 14.0642 9.93973C13.9583 9.96377 12.271 11.079 9.00252 13.2853C8.52361 13.6142 8.08982 13.7744 7.70117 13.766C7.2727 13.7567 6.44851 13.5237 5.83582 13.3246C5.08431 13.0803 4.48704 12.9511 4.53905 12.5363C4.56614 12.3202 4.86371 12.0992 5.43177 11.8733Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_6716_11368" x1="12" y1="0" x2="12" y2="23.822"
                                                        gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#2AABEE"/>
                                            <stop offset="1" stopColor="#229ED9"/>
                                        </linearGradient>
                                        <clipPath id="clip0_6716_11368">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <p className="text">
                            Время работы:<br/>
                            Понедельник - Четверг 09.00 - 18.00<br/>
                            Пятница 09.00 - 16.45<br/>
                            Суббота, восркесенье, праздничные дни - выходной
                        </p>
                        <button onClick={() => showModal()}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="1" width="15" height="15" rx="7.5" stroke="#0070C9"/>
                                <path d="M8 4L8 13" stroke="#0070C9" strokeLinecap="round"/>
                                <path
                                    d="M9 8H8.5V9H9V8ZM12 9C12.2761 9 12.5 8.77614 12.5 8.5C12.5 8.22386 12.2761 8 12 8V9ZM9 9L12 9V8L9 8V9Z"
                                    fill="#0070C9"/>
                                <path
                                    d="M7 8H7.5V9H7V8ZM4 9C3.72386 9 3.5 8.77614 3.5 8.5C3.5 8.22386 3.72386 8 4 8V9ZM7 9H4V8H7V9Z"
                                    fill="#0070C9"/>
                            </svg>
                            <span>Сообщить о страховом случае</span>
                        </button>
                    </div>
                </div>
                <div className="file-block">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V15C2 14.4477 2.44772 14 3 14Z"
                                  fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
                                  fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M12 2C12.5523 2 13 2.44772 13 3V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V3C11 2.44772 11.4477 2 12 2Z"
                                  fill="black"/>
                        </svg>
                    </a>
                    <img src={img} alt="image"/>
                    <button>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1" width="15" height="15" rx="7.5" stroke="#0070C9"/>
                            <path d="M8 4L8 13" stroke="#0070C9" strokeLinecap="round"/>
                            <path
                                d="M9 8H8.5V9H9V8ZM12 9C12.2761 9 12.5 8.77614 12.5 8.5C12.5 8.22386 12.2761 8 12 8V9ZM9 9L12 9V8L9 8V9Z"
                                fill="#0070C9"/>
                            <path
                                d="M7 8H7.5V9H7V8ZM4 9C3.72386 9 3.5 8.77614 3.5 8.5C3.5 8.22386 3.72386 8 4 8V9ZM7 9H4V8H7V9Z"
                                fill="#0070C9"/>
                        </svg>
                        <span>Запросить скан страхового полиса</span>
                    </button>
                    <div className="success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.442 2.51561C9.26012 1.98901 7.93972 1.85856 6.67767 2.1437C5.41563 2.42884 4.27957 3.1143 3.43893 4.09785C2.59828 5.08141 2.0981 6.31035 2.01297 7.6014C1.92783 8.89245 2.26232 10.1764 2.96654 11.2619C3.67075 12.3473 4.70697 13.176 5.92064 13.6244C7.13432 14.0728 8.46042 14.1168 9.70118 13.75C10.9419 13.3831 12.0309 12.625 12.8056 11.5887C13.5803 10.5524 13.9992 9.29346 14 7.99961V7.38666C14 7.01847 14.2984 6.71999 14.6666 6.71999C15.0348 6.71999 15.3333 7.01847 15.3333 7.38666V7.99999C15.3324 9.58137 14.8203 11.1205 13.8735 12.387C12.9266 13.6536 11.5957 14.5802 10.0792 15.0286C8.56274 15.4769 6.94195 15.4231 5.45857 14.8751C3.97519 14.327 2.70871 13.3142 1.848 11.9876C0.987288 10.6609 0.578473 9.09162 0.682522 7.51367C0.786572 5.93572 1.39791 4.43368 2.42536 3.23156C3.45282 2.02944 4.84134 1.19165 6.38383 0.843146C7.92633 0.49464 9.54016 0.654086 10.9846 1.29771C11.3209 1.44756 11.4721 1.84168 11.3222 2.17799C11.1724 2.51431 10.7783 2.66546 10.442 2.51561Z"
                                  fill="#30D158"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M15.1379 2.19503C15.3984 2.45525 15.3986 2.87736 15.1383 3.13784L8.47168 9.81117C8.34668 9.9363 8.17708 10.0066 8.00021 10.0067C7.82334 10.0067 7.6537 9.93647 7.52864 9.8114L5.52864 7.8114C5.26829 7.55106 5.26829 7.12895 5.52864 6.8686C5.78899 6.60825 6.2111 6.60825 6.47145 6.8686L7.9998 8.39696L14.1951 2.1955C14.4553 1.93502 14.8774 1.93481 15.1379 2.19503Z"
                                  fill="#30D158"/>
                        </svg>
                        <span>Запрос отправлен</span>
                    </div>
                </div>
                <button className="ins-request-btn" onClick={() => showModal()}>Сообщить о страховом случае</button>
            </div>
            <div className='insurance-block empty'>
                <Select className='document-container-select'
                        icon={<ChevronDownIcon/>}
                        placeholder='Mazda 3 2020 г.в. JN1WNYD21U00000'
                >
                    <option value='option1'>Mazda 6 2020 г.в. JN1WNYD21U00000</option>
                    <option value='option2'>Mazda 3 2020 г.в. JN1WNYD21U00000</option>
                </Select>
                <div className="empty-message">
                    <p>У вас нет действующих договоров страхования</p>
                    <span>Если у вас есть действующий договор страхования,<br/>
                        свяжитесь с менеджером по телефону +375 29 000 00 00<br/>
                        или оставьте заявку.
                    </span>
                    <button>Оставить заявку</button>
                </div>
            </div>

        </>

    );
};

export default InsuranceBlock;