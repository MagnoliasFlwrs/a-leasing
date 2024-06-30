import React, {useState} from 'react';

const DocumentCopyItem = () => {
    const [isActive , setActive] = useState(false)
    return (
        <div className='document-copy-item' onClick={()=> setActive(!isActive)}>
            {
                isActive ?
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#30D158"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.8536 4.15771C13.0488 4.36799 13.0488 4.70893 12.8536 4.91921L7.35355 10.8423C7.15829 11.0526 6.84171 11.0526 6.64645 10.8423L4.14645 8.14998C3.95118 7.9397 3.95118 7.59876 4.14645 7.38848C4.34171 7.1782 4.65829 7.1782 4.85355 7.38848L7 9.70004L12.1464 4.15771C12.3417 3.94743 12.6583 3.94743 12.8536 4.15771Z"
                              fill="#30D158"/>
                    </svg>
                    :
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#333333"/>
                        <path d="M8 3.5L8 12.5" stroke="#333333" strokeLinecap="round"/>
                        <path
                            d="M9 7.5H8.5V8.5H9V7.5ZM12 8.5C12.2761 8.5 12.5 8.27614 12.5 8C12.5 7.72386 12.2761 7.5 12 7.5V8.5ZM9 8.5L12 8.5V7.5L9 7.5V8.5Z"
                            fill="#333333"/>
                        <path
                            d="M7 7.5H7.5V8.5H7V7.5ZM4 8.5C3.72386 8.5 3.5 8.27614 3.5 8C3.5 7.72386 3.72386 7.5 4 7.5V8.5ZM7 8.5H4V7.5H7V8.5Z"
                            fill="#333333"/>
                    </svg>

            }
            <span>Доверенность на регистрацию предмета лизинга от 11.01.2020</span>
        </div>
    );
};

export default DocumentCopyItem;