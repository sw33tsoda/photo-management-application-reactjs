import React from 'react';
import { Container } from 'reactstrap';
import PhotoList from '../../components/PhotoList';
import { useDispatch,useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';  
// import {Jumbotron, Button} from 'reasctstrap';
import {removePhoto} from '../../photoSlice';


MainPage.propTypes = {};

export default function MainPage(props) {

    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlePhotoEditClick = (photo) => {
        const editPhotoURL = `photos/edit/${photo.id}`;
        history.push(editPhotoURL);
    }

    const handlePhotoRemoveClick = (photo) => {
        console.log('clicked to remove');
        const action = removePhoto(photo);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <h1>This is the list of photos you've added</h1>

            <Container className="text-center">
                <div className="py-5">
                    <Link to ="/photos/add">Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                ></PhotoList>
            </Container>
        </div>
    );
}