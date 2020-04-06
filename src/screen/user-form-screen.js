import React, {Component} from "react";
import {
    FormBuilder, 
    updateFormGroupElement,
    isFullFormValid,
    getFormData
} from "../ui-business-logic/user-form"

import FormGroup from "../component/form-group"

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {...FormBuilder}
    }

    onSubmit = e => {
        e.preventDefault();
        let formData = getFormData(this.state.formGroup);
        console.log("formData ", JSON.stringify(formData));
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        const element = updateFormGroupElement({...this.state.formGroup[name]}, value);
        let updatedFormGroup = {...this.state.formGroup, [name]:element}
        let isFormValid = isFullFormValid(updatedFormGroup);
        this.setState({formGroup:updatedFormGroup, formState:{isValid:isFormValid}})
    };

    render() {
        let formGroup = Object.entries(this.state.formGroup);
        let {isValid}  = this.state.formState;
        return (
            <form onSubmit={this.onSubmit} id="maincontent" >
                {formGroup.map(group => <FormGroup data={group} key={group[0]} formValChange={this.formValChange}/>)}
                <button type="submit" className="btn btn-block btn-danger" 
                    disabled={!isValid}>Create User</button>
            </form>
        );
    }
}