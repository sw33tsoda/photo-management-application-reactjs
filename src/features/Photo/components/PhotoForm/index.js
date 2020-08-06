import React from 'react';
import { Label,Button, FormGroup } from 'reactstrap';
import { Formik,Form, FastField } from 'formik';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
import TextareaField from '../../../../custom-fields/TextareaField';
import RandomPhoto from '../../../../components/RandomPhoto';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import { photoFormValidation } from './validation';
import CheckboxField from '../../../../custom-fields/CheckboxField';
// import * as Yup from 'yup';

export default function PhotoForm(props) {
    const initialValues = {
        title:'',
        author:'',
        country:'',
        desc:'',
        photo:'',
    }


    /// FORM VALIDATION
    const validationSchema = photoFormValidation;

    const selectOptions = [
        {value:0,label:"Vietnam"},
        {value:1,label:"United State"},
    ];

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => console.log(values)}>
            {formikProps => {
                const {values, errors, touched} = formikProps;
                console.log(errors,touched);

                return (
                    <Form>
                        <h1>Add new photo</h1>
                        <FastField
                            name='title'
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature..."
                            disabled={false}
                        >
                        </FastField>

                        <FastField
                            name='author'
                            component={InputField}

                            label="Author"
                            placeholder="Eg: So Amazing"
                            disabled={false}
                        >
                        </FastField>
                        
                        
                        <FastField
                            name='country'
                            component={SelectField}

                            label="Country"
                            placeholder="Pick a country"
                            options={selectOptions}
                            disabled={false}
                        >
                        </FastField>

                        <FastField
                            name='desc'
                            component={TextareaField}
                            
                            label='Description'
                            placeholder='Describing yourself'
                            disabled={false}
                        >
                        </FastField>

                        <FastField
                            name='photo'
                            component={RandomPhotoField}

                            label='Random Photo'
                        ></FastField>

                        <Button color="danger" type="submit">Submit</Button>
                    </Form>
                );
            }}
        </Formik>
    );
}