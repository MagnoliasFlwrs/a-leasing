import React, {useState} from 'react';
import '../styles/applicationDetails.css'
import {useDropzone} from "react-dropzone";

const ApplicationDetailsLayout = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            if (files.length + acceptedFiles.length <= 5) {
                setFiles([...files, ...acceptedFiles]);
            } else {
                alert('You can only upload up to 5 files.');
            }
        }
    });

    const handleDelete = (filePath) => {
        setFiles(files.filter(file => file.path !== filePath));
    };

    const fileItems = files.map(file => (
        <li key={file.path} className='file-item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                    d="M4.5 15C4.5 9.3435 4.5 6.5145 6.258 4.758C8.0145 3 10.8435 3 16.5 3H19.5C25.1565 3 27.9855 3 29.742 4.758C31.5 6.5145 31.5 9.3435 31.5 15V21C31.5 26.6565 31.5 29.4855 29.742 31.242C27.9855 33 25.1565 33 19.5 33H16.5C10.8435 33 8.0145 33 6.258 31.242C4.5 29.4855 4.5 26.6565 4.5 21V15Z"
                    stroke="#333333" strokeWidth="2.25" />
                <path d="M12 15H24M12 21H19.5" stroke="#333333" strokeWidth="2.25" strokeLinecap="round" />
            </svg>
            <span>{file.path}</span>
            <button className="delete-btn" onClick={() => handleDelete(file.path)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1.33325 4.00016C1.33325 3.63197 1.63173 3.3335 1.99992 3.3335H13.9999C14.3681 3.3335 14.6666 3.63197 14.6666 4.00016C14.6666 4.36835 14.3681 4.66683 13.9999 4.66683H1.99992C1.63173 4.66683 1.33325 4.36835 1.33325 4.00016Z"
                          fill="#EA2119" />
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M6.66675 1.99984C6.48994 1.99984 6.32037 2.07007 6.19534 2.1951C6.07032 2.32012 6.00008 2.48969 6.00008 2.6665V3.99984C6.00008 4.36803 5.7016 4.6665 5.33341 4.6665C4.96522 4.6665 4.66675 4.36803 4.66675 3.99984V2.6665C4.66675 2.13607 4.87746 1.62736 5.25253 1.25229C5.62761 0.877218 6.13631 0.666504 6.66675 0.666504H9.33341C9.86385 0.666504 10.3726 0.877218 10.7476 1.25229C11.1227 1.62736 11.3334 2.13607 11.3334 2.6665V3.99984C11.3334 4.36803 11.0349 4.6665 10.6667 4.6665C10.2986 4.6665 10.0001 4.36803 10.0001 3.99984V2.6665C10.0001 2.48969 9.92984 2.32012 9.80482 2.1951C9.67979 2.07007 9.51023 1.99984 9.33341 1.99984H6.66675ZM3.33341 3.33317C3.7016 3.33317 4.00008 3.63165 4.00008 3.99984V13.3332C4.00008 13.51 4.07032 13.6795 4.19534 13.8046C4.32037 13.9296 4.48994 13.9998 4.66675 13.9998H11.3334C11.5102 13.9998 11.6798 13.9296 11.8048 13.8046C11.9298 13.6795 12.0001 13.51 12.0001 13.3332V3.99984C12.0001 3.63165 12.2986 3.33317 12.6667 3.33317C13.0349 3.33317 13.3334 3.63165 13.3334 3.99984V13.3332C13.3334 13.8636 13.1227 14.3723 12.7476 14.7474C12.3726 15.1225 11.8638 15.3332 11.3334 15.3332H4.66675C4.13631 15.3332 3.62761 15.1225 3.25253 14.7474C2.87746 14.3723 2.66675 13.8636 2.66675 13.3332V3.99984C2.66675 3.63165 2.96522 3.33317 3.33341 3.33317Z"
                          fill="#EA2119" />
                </svg>
            </button>
        </li>
    ));

    const [showNotification, setShowNotification] = useState(false);

    const handleCopyLink = (event) => {
        event.preventDefault();
        const linkText = "ссылка на личный кабинет МСИ"; // Replace this with the actual link
        navigator.clipboard.writeText(linkText).then(() => {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        });
    };

    return (
        <div className='application-details-cont'>
            <a href="/contracts-details" className='back-link'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M2.66663 8.50016C2.66663 8.13197 2.9651 7.8335 3.33329 7.8335H12.6666C13.0348 7.8335 13.3333 8.13197 13.3333 8.50016C13.3333 8.86835 13.0348 9.16683 12.6666 9.16683H3.33329C2.9651 9.16683 2.66663 8.86835 2.66663 8.50016Z"
                          fill="#0070C9"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M8.47136 3.36177C8.73171 3.62212 8.73171 4.04423 8.47136 4.30458L4.2761 8.49984L8.47136 12.6951C8.73171 12.9554 8.73171 13.3776 8.47136 13.6379C8.21101 13.8983 7.7889 13.8983 7.52855 13.6379L2.86189 8.97124C2.60154 8.71089 2.60154 8.28878 2.86189 8.02843L7.52855 3.36177C7.7889 3.10142 8.21101 3.10142 8.47136 3.36177Z"
                          fill="#0070C9"/>
                </svg>
                <span>Назад</span>
            </a>
            <h1 className='page-title'>Дополнение к заявке</h1>
            <p className='title'>Дополнение к заявке</p>
            <div className="text">
                <span>Название заявки</span>
                <p>Доверенность на регистрацию предмета лизинга от 11.01.2020</p>
            </div>
            <div className="text">
                <span>Комментарий менеджера</span>
                <p>Текст комментария менеджера Текст комментария менеджера
                    Текст комментария менеджера Текст комментария менеджера Текст комментария менеджера </p>
            </div>
            <div className="comment-wrap">
                <span>Введите запрашиваемые данные</span>
                <textarea placeholder='Комментарий'></textarea>
            </div>
            <button>Отправить дополнение</button>
            <div className="dropzone-container">
                <div {...getRootProps({className: 'application-dropzone'})}>
                    <input {...getInputProps()} />
                    <div className='label'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.1287 9.49979V16.2428C10.1365 16.7358 10.3378 17.2061 10.6893 17.552C11.0407 17.8979 11.5141 18.0918 12.0072 18.0918C12.5004 18.0918 12.9737 17.8979 13.3252 17.552C13.6766 17.2061 13.878 16.7358 13.8857 16.2428L13.8918 7.40448C13.8969 6.98304 13.8184 6.56477 13.6606 6.17393C13.5029 5.7831 13.2691 5.42745 12.9729 5.12763C12.6767 4.8278 12.3239 4.58975 11.935 4.42728C11.5461 4.26481 11.1289 4.18115 10.7074 4.18115C10.2859 4.18115 9.86863 4.26481 9.47974 4.42728C9.09084 4.58975 8.73806 4.8278 8.44185 5.12763C8.14564 5.42745 7.91189 5.7831 7.75415 6.17393C7.59641 6.56477 7.51782 6.98304 7.52293 7.40448V16.3023C7.51434 16.8956 7.62379 17.4847 7.8449 18.0354C8.06602 18.586 8.39439 19.0872 8.81093 19.5098C9.22747 19.9324 9.72386 20.268 10.2713 20.4971C10.8186 20.7261 11.4061 20.8441 11.9995 20.8441C12.5929 20.8441 13.1803 20.7261 13.7277 20.4971C14.2751 20.268 14.7715 19.9324 15.1881 19.5098C15.6046 19.0872 15.933 18.586 16.1541 18.0354C16.3752 17.4847 16.4846 16.8956 16.4761 16.3023V7.9876"
                                stroke="#959595" strokeOpacity="0.4" strokeWidth="1.5" strokeMiterlimit="10"
                                strokeLinecap="round"/>
                        </svg>
                        <span>Выберите документы</span>
                    </div>
                </div>
                <ul className='files-list'>{fileItems}</ul>
            </div>
            <a href="#" className='appl-link'>Перейти в личный кабинет МСИ</a>
            <div className="appl-actions">
                <a href="#" className="copy-link" onClick={handleCopyLink}>
                    {showNotification &&
                        <div className="notification">
                            <div className="notification-wrapper">
                                Ссылка скопирована
                                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="13" viewBox="0 0 49 13"
                                     fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M0 0.00194945C1.78536 0.00194945 3.5702 -0.00655157 5.35556 0.0119506C7.06432 0.0299528 8.97684 0.0554558 10.6397 0.657028C12.436 1.30711 13.6252 2.44374 14.8217 3.7814C15.6831 4.74352 17.3752 6.79626 18.1991 7.78738C18.8735 8.59997 20.1935 10.2062 20.9142 10.9833C21.8214 11.9609 22.9429 13 24.5005 13C26.0582 13 27.1791 11.9609 28.0858 10.9843C28.8065 10.2077 30.1265 8.60047 30.8014 7.78838C31.6242 6.79726 33.3163 4.74451 34.1783 3.7824C35.3768 2.44474 36.564 1.30811 38.3597 0.658028C40.0232 0.0579561 41.9362 0.0309529 43.6439 0.0129508C45.4298 -0.00555145 47.2146 0.00294957 49 0.00294957"
                                          fill="#F7F7F9"/>
                                </svg>
                            </div>
                        </div>
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.2929 7.05036L12.7071 5.63615C13.6497 4.69358 16.1012 3.37341 18.364 5.63615C20.6267 7.89889 19.3065 10.3504 18.364 11.293L16.9498 12.7072M7.05026 11.293L5.63604 12.7072C4.69347 13.6498 3.3733 16.1013 5.63604 18.3641C7.89879 20.6268 10.3503 19.3066 11.2929 18.3641L12.7071 16.9499M9.17158 14.8285L14.8284 9.17168"
                            stroke="#0070C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Скопировать ссылку на личный кабинет МСИ</span>
                </a>
                <input type="text" placeholder='Введите номер телефона'/>
                <span className='feedback'>Ссылка отправлена. Повторить попытку можно через 23 ч 00 мин</span>
            </div>
        </div>
    );
};

export default ApplicationDetailsLayout;