import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label,Input } from 'reactstrap';

CheckboxField.propTypes = {
    field:  PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label:  PropTypes.string,
    disabled:   PropTypes.bool,
}

CheckboxField.defaultProps = {
    label:'',
    disabled:false,
}


function CheckboxField(props) {
    const {
        field,form,
        label,disabled,
    } = props;

    const {name} = field;

    return (
        <FormGroup>
            {label && <Label>{label}</Label>}
            <Input
                name={name}
                {...field}
                type="checkbox"
                disabled={disabled}
            ></Input>
        </FormGroup>
    );
}

export default CheckboxField;