import React from 'react';
import PhotoForm from '../../components/PhotoForm';
import { useDispatch } from 'react-redux';
import {addPhoto} from '../../../photoSlice';
import {useHistory} from 'react-router-dom';

AddEditPage.propTypes = {};

export default function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (values) =>  {
        // console.log(arguments);
        setTimeout(() => {  
            console.log('Form submit:',values);
            const action = addPhoto(values);
            dispatch(action);
            history.push('/photos');
        }, 2000);
            
    }

    return (
        <PhotoForm onSubmit={handleSubmit}></PhotoForm>
    );
}