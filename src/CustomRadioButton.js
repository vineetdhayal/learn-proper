import React from 'react';
import './custom.css';

const CustomRadioButton = React.memo(({ label, checked, onChange, value }) => {
    return (
        <div>
            <label className='custom-radio'>
                <input type='radio' checked={checked} onChange={onChange} value={value}></input>
                <span className="custom-radio-button"></span>
                {label}
            </label>
        </div>
    )
})

export default CustomRadioButton
