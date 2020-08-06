import * as Yup from 'yup';

export const photoFormValidation = Yup.object().shape({
    title:  Yup.string().required('This field is required.').max(64,"Maximum length is 64"),
    author: Yup.string().required('This field is required.'),
    country: Yup.string().required('This field is required.'),
    desc: Yup.string().required('This field is required.'),
});