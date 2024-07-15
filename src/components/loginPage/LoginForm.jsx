import React, { useState, useEffect } from 'react';
import {Checkbox, PinInput, PinInputField} from "@chakra-ui/react";
import {useGetAccountsMutation, useSignInMutation} from "../../services/auth/index.js";
import {useDispatch, useSelector} from "react-redux";
import {setTokens} from "../../lib/store/features/auth/index.js";
import {useMask} from "@react-input/mask";

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
    const [signIn] = useSignInMutation();
    const [getAccounts] = useGetAccountsMutation();
    const [accounts, setAccounts] = useState([]);
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const inputRef = useMask({
        mask: "+375 (__) ___-__-__",
        replacement: { _: /\d/ },
    });
    const newInputRef = useMask({
        mask: "+375 (__) ___-__-__",
        replacement: { _: /\d/ },
    });
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
    const handleSubmit = async  ()=> {
        const newLogin = login.replace(/[\s()+-]/g, '');
        try {
            const response = await getAccounts({'phoneNumber': newLogin , 'password' : password}).unwrap();
            setAccounts(Object.entries(response))

        } catch (error) {
            console.error('Sign-in failed:', error);
            setPassword('');
            setPasswordErr(true);
        }


    }
    useEffect(() => {
        const signInAccount = async () => {
            console.log(accounts);
            if (accounts.length !== 0) {
                if (accounts.length === 1) {
                    const newLogin = login.replace(/[\s()+-]/g, '');
                    const body = {
                        "password": password,
                        "phoneNumber": newLogin,
                        "signInType": accounts[0][0]
                    };
                    try {
                        const response = await signIn(body).unwrap();
                        dispatch(setTokens({
                            accessToken : response.accessToken,
                            refreshToken : response.refreshToken
                        }));
                    } catch (error) {
                        console.error('Sign-in failed:', error);
                        setPassword('');
                        setPasswordErr(true);
                    }
                } else {
                    document.querySelector('.choose-account-block').classList.add('open');
                }
            }
        };

        signInAccount();
    }, [accounts]);

    const choosenAccountSubmit = async () => {
        const newLogin = login.replace(/[\s()+-]/g, '');
        const body = {
            "password": password,
            "phoneNumber": newLogin,
            "signInType": selectedAccount
        };
        try {
            const response = await signIn(body).unwrap();
            dispatch(setTokens({
                accessToken : response.accessToken,
                refreshToken : response.refreshToken
            }));
        } catch (error) {
            console.error('Sign-in failed:', error);
            setPassword('');
            setPasswordErr(true);
        }
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
    const hideChooseAccountBlock = () => {
        document.querySelector('.choose-account-block').classList.remove('open');
    }

    return (
        <div className='login-form'>
            <div className="form">
                <div className="form-inner">
                    <p className='title'>Вход в личный кабинет</p>
                    <div className="row">
                        <div className="input-box">
                            <input
                                ref={inputRef}
                                placeholder="+375 (__) ___-__-__"
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
                            <div className="input-box">
                                <input
                                    type="password"
                                    className={passwordErr ? 'pass-input error' : 'pass-input'}
                                    onChange={(e) => handlePass(e)}
                                    placeholder='Введите пароль'
                                    value={password}
                                />
                                {
                                    passwordErr && <span>Неверный логин или пароль</span>
                                }

                            </div>

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
                <div className="back-btn" onClick={()=> hideChooseAccountBlock()}>
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
                            {accounts?.map((account, index) => {
                                return (
                                    <Checkbox
                                        key={index}
                                        colorScheme='red'
                                        isChecked={selectedAccount === account[0]}
                                        onChange={() => handleCheckboxChange(account[0])}
                                    >
                                        {account[0] === 'NATURAL_PERSON' && (
                                            <>
                                                {account[1].profile?.generalInfo?.fullName?.firstname} {account[1].profile?.generalInfo?.fullName?.middlename} {account[1].profile?.generalInfo?.fullName?.lastname}
                                            </>
                                        )}
                                        {account[0] === 'LEGAL_PERSON' && (
                                            <>
                                                {account[1][0].profile?.generalInfo?.generalInfo?.shortName}
                                            </>
                                        )}
                                        {account[0] === 'INDIVIDUAL_ENTREPRENEUR' && (
                                            <>
                                                ИП {account[1].profile?.generalInfo?.fullName?.lastname} {account[1].profile?.generalInfo?.fullName?.firstname} {account[1].profile?.generalInfo?.fullName?.middlename}
                                            </>
                                        )}
                                    </Checkbox>
                                );
                            })}
                        </div>

                    </div>

                    <button className={isChoosenAccount ? 'red' : 'gray'}
                            onClick={()=> choosenAccountSubmit()}
                    >Войти</button>
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
                                ref={newInputRef}
                                placeholder="+375 (__) ___-__-__"
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
