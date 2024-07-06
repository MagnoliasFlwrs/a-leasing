import React from 'react';

const LoginForm = () => {
    return (
        <div className='login-form'>
            <div className="form">
                <div className="form-inner">
                    <p className='title'>Вход в личный кабинет</p>
                    <div className="row">
                        <input type="text" className='login-input'/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z"
                                      fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div className="row">
                        <input type="text" className='login-input'/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36"
                                 fill="none">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.9393 7.93934C13.5251 7.35355 14.4749 7.35355 15.0607 7.93934L24.0607 16.9393C24.6464 17.5251 24.6464 18.4749 24.0607 19.0607L15.0607 28.0607C14.4749 28.6464 13.5251 28.6464 12.9393 28.0607C12.3536 27.4749 12.3536 26.5251 12.9393 25.9393L20.8787 18L12.9393 10.0607C12.3536 9.47487 12.3536 8.52513 12.9393 7.93934Z"
                                      fill="white"/>
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoginForm;