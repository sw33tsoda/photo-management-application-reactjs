import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup,Label, FormFeedback } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';

SelectField.propTypes = {
    field:  PropTypes.object.isRequired,
    form:   PropTypes.object.isRequired,

    label:  PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options:    PropTypes.array,
}

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options:[]
}

export default function SelectField(props) {
    const {
        field,form,
        label,placeholder,disabled,options
    } = props;

    const {name,value} = field;
    const selectedOption = options.find(option => option.value === value);
    const {errors,touched} = form;
    const isError = errors[name] && touched[name];

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name:name,
                value:selectedValue,
            }
        };
        field.onChange(changeEvent);    
    }


    return (
        <FormGroup>
            {label && <Label>{label}</Label>}
            <Select
                name={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                label={label}
                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
                className={isError ? 'is-invalid' : ''}
            ></Select>

            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    );
}