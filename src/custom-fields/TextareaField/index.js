import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup,Label,Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

TextareaField.propTypes = {
    field: PropTypes.object.isRequired,
    form:   PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

TextareaField.defaultProps = {
    label:'',
    placeholder:'',
    disabled:false,
}


export default function TextareaField(props) {
    const {
        field,form,
        label,placeholder,disabled
    } = props;

    const {name} = field;

    const {errors,touched} = form;
    const isError = errors[name] && touched[name];
    // console.log(isError);
    return (
        <FormGroup>
            {label ?? <Label>{label}</Label>}
            <Input
                name={name}
                {...field}

                type="textarea"
                placeholder={placeholder}
                disabled={disabled}
                invalid={isError}
            >
            </Input>

            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
            {/* {isError && <h1>something</h1>} */}
        </FormGroup>
    );
}