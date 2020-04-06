import React from 'react';

const getClassName = ({isValid, isDirty}) => {
    if(isDirty){
        return isValid !== true ? "is-invalid form-control" : "form-control";
    }
    return "form-control";
}

export default (
        {
            data:[
                key, 
                {
                    label, 
                    value, 
                    element:{type}, 
                    isValid, 
                    isDirty, 
                    validationMessage
                }
            ], 
            formValChange
        }
    ) => {
    return (
        <div className="form-group">
            <label htmlFor={key}>{label}</label>
            <input
                type={type}
                className={getClassName({isValid, isDirty})}
                name={key}
                value={value}
                id={key}
                onChange={formValChange}
            />
            {isDirty === true && isValid !== true && (
                <span className="invalid-feedback">{validationMessage}</span>
            )}
        </div>
    )
}