import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup,Label,Input, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};;

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

export default function InputField(props) {
    const {
        field,form,
        type,label,placeholder,disabled
    } = props;

    const {name} = field;

    const {errors,touched} = form;
    const isError = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                name={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={isError}
            ></Input>
            
            {/* {isError && <React.Fragment><br/><Alert color="danger">{errors[name]}</Alert></React.Fragment>}
            {isError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    );
}

