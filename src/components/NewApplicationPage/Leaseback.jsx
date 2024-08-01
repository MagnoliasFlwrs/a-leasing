import React, {useEffect, useState} from 'react';
import {Checkbox, Select, Switch} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import CustomSelect from "../CustomSelect.jsx";
import CarBlock from "./CarBlock.jsx";
import MotoBlock from "./MotoBlock.jsx";
import EquipmentBlock from "./EquipmentBlock.jsx";
import CommercialAutoBlock from "./CommercialAutoBlock.jsx";
import BuildingsBlock from "./BuildingsBlock.jsx";

const Leaseback = () => {
    const [isActive, setIsActive] = useState(window.innerWidth < 1133);
    const [type , setType] = useState('');
    const [openSelect, setOpenSelect] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 743) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleToggleSelect = (selectName) => {
        setOpenSelect(openSelect === selectName ? null : selectName);
    };
    const options = [
        { value: 'Автомобиль', label: 'Автомобиль' },
        { value: 'Мототехника', label: 'Мототехника' },
        { value: 'Оборудование', label: 'Оборудование' },
        { value: 'Коммерческая', label: 'Коммерческая колесная техника от 3,5т' },
        { value: 'Недвижимость', label: 'Недвижимость' },
    ];
    console.log(type)
    return (
        <div className='new-appl-block'>
            <div className="chapter">
                <div className="row">
                    {
                        isActive ?
                            <Select className='document-container-select'
                                    icon={<ChevronDownIcon/>}
                            >
                                <option value='option1'>Новые</option>
                                <option value='option2'>Старые</option>
                            </Select>
                            :
                            <CustomSelect options={options}
                                          value={type}
                                          onChange={setType}
                                          isOpen={openSelect === 'type'}
                                          onToggle={() => handleToggleSelect('type')}
                                          label='Тип предмета'/>

                    }
                </div>
            </div>
            {
                type === 'Автомобиль' && <CarBlock/>
            }
            {
                type === 'Мототехника' && <MotoBlock/>
            }
            {
                type === 'Оборудование' && <EquipmentBlock/>
            }
            {
                type === 'Коммерческая' && <CommercialAutoBlock/>
            }
            {
                type === 'Недвижимость' && <BuildingsBlock/>
            }
        </div>
    );
};

export default Leaseback;