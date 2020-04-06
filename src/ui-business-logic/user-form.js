const validationMessage = {
    name:"At least 4 characters required",
    email:"Email address is invalid",
    password:"At least 8 characters required"
}

const nameValidation = (name) => {
    let isValid = name && name.length > 4;
    return [isValid, isValid ? "" : validationMessage.name]
}

const passwordValidation = (password) => {
    if(password && password.length < 8){
        return [false, validationMessage.password];
    }
    // add regex for strong password validation
    return [true, ""];
}

const emailValidation = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = regex.test(email)
    return [isValid, isValid ? "" : validationMessage.email];
}

export const FormBuilder = { 
    formGroup:{
        name:{
            label:'Name',
            required:true,
            isValid: false,
            isDirty: false,
            validationMessage:'',
            value:'',
            validate: nameValidation,
            element: {
                type:'text'
            }  
        },
        password:{
            label:'Password',
            required:true,
            isValid: false,
            isDirty: false,
            validationMessage:'',
            value:'',
            validate: passwordValidation,
            element: {
                type:'password'
            }
        },
        email:{
            label:'Email',
            required:true,
            isValid: false,
            isDirty: false,
            validationMessage:'',
            value:'',
            validate: emailValidation,
            element: {
                type:'email'
            }
        }
    },
    formState:{
        isValid:false
    }
}

export const updateFormGroupElement = (ele, value) => {
    let element = {...ele};
    element.value = value;
    element.isDirty  = true;

    let [isValid, message] = element.validate(value);
    element.isValid = isValid;
    element.validationMessage = message;
    return element;
}

export const isFullFormValid = (formGroup) => {
    let elements = Object.values(formGroup)
    for(let element of elements){
        if(element.isValid === false){
            return false;
        }
    }
    return true;
}

export const getFormData = (formGroup) => {
    return Object
        .entries(formGroup)
        .reduce((formData, entry) => {
            formData[entry[0]] = entry[1].value
            return formData
        }, {})
}