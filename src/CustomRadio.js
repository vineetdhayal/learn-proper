import React from 'react'
import { useState } from 'react';
import CustomRadioButton from './CustomRadioButton';

const CustomRadio = React.memo(() => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleRadioChange = (event) => {
        console.log(event);
        setSelectedOption(event.target.value);
    }
    return (
        <div>
            <CustomRadioButton
                label="Option1"
                checked={selectedOption === 'option1'}
                onChange={handleRadioChange}
                value="option1"
            ></CustomRadioButton>
            <CustomRadioButton
                label="Option2"
                checked={selectedOption === 'option2'}
                onChange={handleRadioChange}
                value="option2"
            ></CustomRadioButton>
        </div>
    )
})

export default CustomRadio
