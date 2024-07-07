import React, { useState, useEffect } from 'react';
import { Checkbox } from "@chakra-ui/react";

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [loginErr, setLoginErr] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [isValidLogin, setIsValidLogin] = useState(false);

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
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z" fill="white" />
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
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                    }
                    <Checkbox colorScheme='red' defaultChecked>
                        Запомнить меня
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
