import React from 'react';

const ChangeMainPersonModal = ({open , onSubmit , close , oldPerson , newPerson}) => {
    return (
        <>
            {
                open &&
                <div className='change-main-person-modal'>
                    <div className="mp-overlay"></div>
                    <div className="modal-wrapper">
                        <div className="row">
                            <p>Изменение контактного лица</p>
                            <span>Текущее контактное лицо: {oldPerson}.
Хотите изменить на {newPerson}?</span>
                        </div>

                        <div className="btns">
                            <div className="red-btn" onClick={onSubmit}>
                                Изменить
                            </div>
                            <span onClick={close}>Отмена</span>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default ChangeMainPersonModal;