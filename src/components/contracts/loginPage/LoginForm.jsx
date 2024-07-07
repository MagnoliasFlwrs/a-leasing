import React, { useState, useEffect } from 'react';
import {Checkbox, PinInput, PinInputField} from "@chakra-ui/react";

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [loginErr, setLoginErr] = useState(false);
    const [newLogin, setNewLogin] = useState('');
    const [newLoginErr, setNewLoginErr] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [isValidLogin, setIsValidLogin] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [isChoosenAccount, setIsChoosenAccount] = useState(false);

    useEffect(() => {
        const input = document.querySelector('.login-input');
        if (input) {
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
        }
        return () => {
            if (input) {
                input.removeEventListener("input", mask, false);
                input.removeEventListener("focus", mask, false);
                input.removeEventListener("blur", mask, false);
            }
        };
    }, []);
    useEffect(() => {
        const input = document.querySelector('.new-input');
        if (input) {
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
        }
        return () => {
            if (input) {
                input.removeEventListener("input", mask, false);
                input.removeEventListener("focus", mask, false);
                input.removeEventListener("blur", mask, false);
            }
        };
    }, []);

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function mask(event) {
        let matrix = "+375 (__) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = event.target.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        event.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });

        if (event.type === "blur") {
            if (event.target.value.length === 7) event.target.value = "";
        } else setCursorPosition(event.target.value.length, event.target);

        setLogin(event.target.value);
    }

    const handleLogin = (e) => {
        const { value } = e.target;
        setLogin(value);
        console.log(value)
    }
    const handleNewLogin = (e) => {
        const { value } = e.target;
        setNewLogin(value);
        console.log(newLogin)
    }

    const handlePass = (e) => {
        const { value } = e.target;
        setPassword(value);
    }
    const validateLogin = ()=> {
        const regex = /^375(29|33|25|44)\d{7}$/;
        const newLogin = login.replace(/[\s()+-]/g, '')
        if (regex.test(newLogin)) {
            setIsValidLogin(true);
            setLoginErr(false);
        } else {
            setIsValidLogin(false);
            setLoginErr(true);
        }
    }
    const handleSubmit = ()=> {
        console.log(login , password)
    }


    const handleCheckboxChange = (account) => {
        setSelectedAccount(account);
        setIsChoosenAccount(true);
    };

    const hideRegistrationBlock = () => {
        document.querySelector('.registration-block').classList.remove('open');
    }
    const openRegistrationBlock = (e) => {
        e.preventDefault()
        document.querySelector('.registration-block').classList.add('open');
    }

    return (
        <div className='login-form'>
            <div className="form">
                <div className="form-inner">
                    <p className='title'>Вход в личный кабинет</p>
                    <div className="row">
                        <div className="input-box">
                            <input
                                type="text"
                                className={loginErr ? 'login-input error' : 'login-input'}
                                onChange={(e) => handleLogin(e)}
                                value={login}
                            />
                            {
                                loginErr && <span>Неверный формат номера телефона</span>
                            }

                        </div>

                        {
                            !isValidLogin &&
                            <button onClick={() => validateLogin()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z"
                                          fill="white"/>
                                </svg>
                            </button>
                        }
                    </div>
                    {
                        isValidLogin &&
                        <div className="row">
                            <input
                                type="password"
                                className='pass-input'
                                onChange={(e) => handlePass(e)}
                                value={password}
                            />
                            <button onClick={() => handleSubmit()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z"
                                          fill="white"/>
                                </svg>
                            </button>
                        </div>
                    }
                    <Checkbox colorScheme='red' defaultChecked>
                        Запомнить меня
                    </Checkbox>
                </div>
                <div className="links-inner">
                    <a href="#">
                        Забыли пароль?
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                            <path d="M1 1.5L4.91399 4.92474C4.95952 4.96458 4.95952 5.03542 4.91399 5.07526L1 8.5"
                                  stroke="#0070C9" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </a>
                    <p>
                        Нет аккаунта?
                        <a href="#" onClick={(e)=> openRegistrationBlock(e)}>Зарегестрироваться</a>
                    </p>
                </div>
            </div>
            <div className="choose-account-block ">
                <div className="back-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.66675 8.49967C2.66675 8.13148 2.96522 7.83301 3.33341 7.83301H12.6667C13.0349 7.83301 13.3334 8.13148 13.3334 8.49967C13.3334 8.86786 13.0349 9.16634 12.6667 9.16634H3.33341C2.96522 9.16634 2.66675 8.86786 2.66675 8.49967Z"
                              fill="#0070C9"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.47149 3.36225C8.73184 3.6226 8.73184 4.04471 8.47149 4.30506L4.27622 8.50033L8.47149 12.6956C8.73184 12.9559 8.73184 13.378 8.47149 13.6384C8.21114 13.8987 7.78903 13.8987 7.52868 13.6384L2.86201 8.97173C2.60166 8.71138 2.60166 8.28927 2.86201 8.02892L7.52868 3.36225C7.78903 3.1019 8.21114 3.1019 8.47149 3.36225Z"
                              fill="#0070C9"/>
                    </svg>
                    <span>Вернуться назад</span>
                </div>
                <div className="container">
                    <div className="content-container">
                        <p className="title">Выберите аккаунт</p>
                        <span className='text'>На ваш номер телефона зарегестрировано
                         несколько аккаунтов. Выберите тот тип аккаунта,
                        под которым вы хотите авторизоваться.</span>
                        <div className="checkboxes">
                            <Checkbox
                                colorScheme='red'
                                isChecked={selectedAccount === 'ИП “Иванов”'}
                                onChange={() => handleCheckboxChange('ИП “Иванов”')}
                            >
                                ИП “Иванов”
                            </Checkbox>
                            <Checkbox
                                colorScheme='red'
                                isChecked={selectedAccount === 'Иванов Иван Иванович'}
                                onChange={() => handleCheckboxChange('Иванов Иван Иванович')}
                            >
                                Иванов Иван Иванович
                            </Checkbox>
                        </div>
                    </div>

                    <button className={isChoosenAccount ? 'red' : 'gray'}>Войти</button>
                </div>
            </div>
            <div className="confirm-block">
                <div className="back-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.66675 8.49967C2.66675 8.13148 2.96522 7.83301 3.33341 7.83301H12.6667C13.0349 7.83301 13.3334 8.13148 13.3334 8.49967C13.3334 8.86786 13.0349 9.16634 12.6667 9.16634H3.33341C2.96522 9.16634 2.66675 8.86786 2.66675 8.49967Z"
                              fill="#0070C9"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.47149 3.36225C8.73184 3.6226 8.73184 4.04471 8.47149 4.30506L4.27622 8.50033L8.47149 12.6956C8.73184 12.9559 8.73184 13.378 8.47149 13.6384C8.21114 13.8987 7.78903 13.8987 7.52868 13.6384L2.86201 8.97173C2.60166 8.71138 2.60166 8.28927 2.86201 8.02892L7.52868 3.36225C7.78903 3.1019 8.21114 3.1019 8.47149 3.36225Z"
                              fill="#0070C9"/>
                    </svg>
                    <span>Вернуться назад</span>
                </div>
                <div className="confirm-container">
                    <div className="confirm-inner">
                        <p>На ваш номер телефона<br/>
                            +375 29 100 00 00<br/>
                            выслан смс-код подтверждения.<br/>
                            Введите код</p>
                        <div className="pin-inputs">
                            <PinInput manageFocus={true}>
                                <PinInputField className='pin-input'/>
                                <PinInputField className='pin-input'/>
                                <PinInputField className='pin-input'/>
                                <PinInputField className='pin-input'/>
                                <PinInputField className='pin-input'/>
                                <PinInputField className='pin-input'/>
                            </PinInput>
                        </div>

                        <a href="#">Отправить код повторно через 00:00</a>
                        <span className='text'>Если вы сменили номер телефона, вам необходимо обновить данные через МСИ.<br/>
Обратитесь к нашему менеджеру для консультации.<br/>
Телефон контакт-центра +375 29 000 00 00 </span>
                    </div>

                    <p className='no-account'>
                        Нет аккаунта?
                        <a href="#">Зарегестрироваться</a>
                    </p>
                </div>
            </div>
            <div className="registration-block ">
                <div className="back-btn" onClick={()=>  hideRegistrationBlock()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.66675 8.49967C2.66675 8.13148 2.96522 7.83301 3.33341 7.83301H12.6667C13.0349 7.83301 13.3334 8.13148 13.3334 8.49967C13.3334 8.86786 13.0349 9.16634 12.6667 9.16634H3.33341C2.96522 9.16634 2.66675 8.86786 2.66675 8.49967Z"
                              fill="#0070C9"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.47149 3.36225C8.73184 3.6226 8.73184 4.04471 8.47149 4.30506L4.27622 8.50033L8.47149 12.6956C8.73184 12.9559 8.73184 13.378 8.47149 13.6384C8.21114 13.8987 7.78903 13.8987 7.52868 13.6384L2.86201 8.97173C2.60166 8.71138 2.60166 8.28927 2.86201 8.02892L7.52868 3.36225C7.78903 3.1019 8.21114 3.1019 8.47149 3.36225Z"
                              fill="#0070C9"/>
                    </svg>
                    <span>Вернуться назад</span>
                </div>
                <div className="registration-container">
                    <p className="title">Регистрация</p>
                    <div className="row">
                        <div className="input-box">
                            <input
                                type="text"
                                className={loginErr ? 'new-input error' : 'new-input'}
                                onChange={(e) => handleLogin(e)}
                                value={login}
                            />
                            {
                                loginErr && <span>Неверный формат номера телефона</span>
                            }

                        </div>
                        <button onClick={()=> validateLogin()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z"
                                      fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <p className='acc'>
                        Уже есть аккаунт?
                        <a href="#" onClick={()=>  hideRegistrationBlock()}>Войти</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
