import React, {useState} from 'react';
import FaqChapter from "./FaqChapter.jsx";
import FaqModal from "./FaqModal.jsx";
import {
    useGetFaqQuestionsByCategoryIdQuery,
} from "../../services/faq/faq.service.js";

const FaqBlock = ({id , categoryName , all , allData}) => {
    const [openModal , setOpenModal] = useState(false);
    const { data, error, isSuccess } = useGetFaqQuestionsByCategoryIdQuery({ limit: 10, page: 1 , id: id });
    const onChangeModalState = (value) => {
        setOpenModal(value)
    }
    return (
        <div className='faq-block'>
            {
                all ?
                    <>
                        {
                            allData.data.map((item , index)=> {
                                return (
                                    <FaqChapter isAll={all}
                                                key={index}
                                                id={item.id}
                                                chapterIndex={index}
                                                categoryName={item.name}/>
                                )
                            })
                        }
                    </>
                    :
                    <FaqChapter id={id} categoryName={categoryName} chapterIndex={0}/>
            }

            <p className='modal-link'>Остались вопросы? <a href="#" onClick={()=> setOpenModal(true)}>Свяжитесь с нашим call-центром</a></p>
            <FaqModal isOpen={openModal} changeModal={onChangeModalState}/>
        </div>
    );
};

export default FaqBlock;