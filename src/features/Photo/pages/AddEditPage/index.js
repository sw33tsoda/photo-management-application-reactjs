import React from 'react';
import PhotoForm from '../../components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import {addPhoto} from '../../photoSlice';
import {useHistory} from 'react-router-dom';

AddEditPage.propTypes = {};

export default function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector(state => state.photos);

    const handleSubmit = (values) =>  {
        // console.log(arguments);
        setTimeout(() => {  
            console.log('Form submit:',values);
            const action = addPhoto(values);
            dispatch(action);
            history.push('/photos');
        }, 2000);
            
    }
    console.log("useSelector => ",data);
    return (
        <>
        {JSON.stringify(data)}
        <PhotoForm onSubmit={handleSubmit}></PhotoForm>
        </>
    );
}