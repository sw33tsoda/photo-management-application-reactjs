import React from 'react';
import PhotoForm from '../../components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import {addPhoto, updatePhoto} from '../../photoSlice';
import {useHistory, useParams} from 'react-router-dom';

AddEditPage.propTypes = {};


export default function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector(state => state.photos);

    const {photo_id} = useParams();
    const isAddMode = !photo_id;

    const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === parseInt(photo_id))    );
    
    console.log('addedit index => ',isAddMode,editedPhoto) 
    const initialValues = (isAddMode == true)
        ? {
            title:'',
            author:'',
            country:'',
            desc:'',
            photo:'',
        }
        : editedPhoto;


    const handleSubmit = (values) =>  {
        // console.log(arguments);
        setTimeout(() => {
            if (isAddMode) {
                console.log('Form submit:',values);
                const action = addPhoto(values);
                dispatch(action);
            } else {
                console.log('reached');
                const action = updatePhoto(values);
                dispatch(action);
            }
            history.push('/photos');
        }, 2000);
            
    }
    console.log("useSelector => ",data);
    return (
        <>
        {JSON.stringify(data)}
        <PhotoForm onSubmit={handleSubmit} initialValues={initialValues} isAddMode={isAddMode}></PhotoForm>
        </>
    );
}