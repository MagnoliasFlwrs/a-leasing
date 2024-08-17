import React, { useEffect, useRef, useState } from 'react';

const ReviewCard = ({ item }) => {
    const [modalActivity, setModalActivity] = useState(false);
    const hiddenTextRef = useRef(null);
    const hiddenTextlLabelRef = useRef(null);

    // Разбиваем текст на слова и проверяем длину
    const maxLength = 243;
    const words = item.text.split(' ');
    let shortText = '';
    let hiddenText = '';

    for (let word of words) {
        if ((shortText + word).length <= maxLength) {
            shortText += (shortText ? ' ' : '') + word;
        } else {
            hiddenText += (hiddenText ? ' ' : '') + word;
        }
    }

    const handleClickOutside = (event) => {
        if (
            hiddenTextRef.current &&
            hiddenTextlLabelRef.current &&
            !hiddenTextRef.current.contains(event.target) &&
            !hiddenTextlLabelRef.current.contains(event.target)
        ) {
            setModalActivity(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleToggleModal = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setModalActivity(prev => !prev);
    };

    const date = new Date(item.datetime);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('ru-RU', options);

    const stars = new Array(item.rating).fill(null);

    return (
        <div className='review-card'>
            <div className="head-row">
                <p>{item.name}</p>
                <span>{formattedDate}</span>
                <div className="stars">
                    {stars.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path
                                d="M7.64226 0.715205C7.78969 0.42046 8.21031 0.420461 8.35774 0.715205L10.2771 4.5524C10.3353 4.66879 10.4465 4.74959 10.5752 4.76899L14.8177 5.40864C15.1436 5.45777 15.2736 5.85781 15.0388 6.08911L11.9825 9.10028C11.8898 9.19161 11.8473 9.32234 11.8687 9.45072L12.5713 13.6832C12.6253 14.0084 12.285 14.2556 11.9925 14.1038L8.18424 12.1276C8.06873 12.0677 7.93127 12.0677 7.81576 12.1276L4.00752 14.1038C3.715 14.2556 3.37471 14.0084 3.42869 13.6832L4.13135 9.45072C4.15266 9.32234 4.11018 9.19161 4.01748 9.10028L0.961199 6.08911C0.726439 5.85781 0.85642 5.45777 1.1823 5.40864L5.4248 4.76899C5.55349 4.74959 5.66469 4.66879 5.72291 4.5524L7.64226 0.715205Z"
                                fill="#FFAA64"
                            />
                        </svg>
                    ))}
                </div>
            </div>
            <div className="text">
                <p>
                    {shortText} {hiddenText && (
                    <span ref={hiddenTextlLabelRef} onClick={handleToggleModal}>
                            {modalActivity ? 'Скрыть' : 'Читать далее'}
                        </span>
                )}
                </p>
                <div className="hidden-text-modal" ref={hiddenTextRef} style={{ display: modalActivity ? 'flex' : 'none' }}>
                    <span>{hiddenText}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
