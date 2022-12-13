import React, {ComponentType} from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import style from './FormControl.module.css'

type FormControlType = {
    formType: 'input' | 'textarea' | 'checkbox'
}

export const MyTextField = ({meta, input, formType = 'input', ...restprops}: WrappedFieldProps & FormControlType) => {
    const error = meta.error && meta.touched
    return (
        <>
            {formType === 'textarea' && <textarea className={`${error ? style.errorInput : ''}`} {...input} {...restprops}></textarea>}
            {formType === 'input' && <input className={`${error ? style.errorInput : ''}`} {...input} {...restprops}></input>}
            {error && <span style={{color: 'red'}}>{meta.error}</span>}
        </>
    );
};


// export const TextAria = ({meta, input, ...restprops}: WrappedFieldProps) => {
//     const error = meta.error && meta.touched
//     return (
//         <>
//             <textarea className={`${error  ? style.errorInput: ''}`} {...input} {...restprops}></textarea>
//             {error && <span style={{color: 'red'}}>{meta.error}</span>}
//         </>
//     );
// };

