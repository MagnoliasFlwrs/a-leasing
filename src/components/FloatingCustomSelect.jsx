import React, {useState} from 'react';
import '../styles/floatingSelect.css'

const FloatingCustomSelect = ({ options, value, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };
    return (
        <div className="custom-select">
            <div className="custom-select__wrapper">
                <div
                    className={`custom-select__label ${value ? 'floating' : ''}`}
                >
                    {label}
                </div>
                <div
                    className={`custom-select__selected ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {value || ''}
                    <span className="custom-select__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                            <path d="M14 1.75L8.20711 7.54289C7.81658 7.93342 7.18342 7.93342 6.79289 7.54289L1 1.75"
                                  stroke="#333333" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </span>
                </div>
            </div>
            {isOpen && (
                <div className="custom-select__options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="custom-select__option"
                            onClick={() => handleSelect(option.value)}
                        >
                        {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FloatingCustomSelect;