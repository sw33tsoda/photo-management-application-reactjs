import React from 'react';
import PropTypes from 'prop-types';
import './RandomPhoto.scss';
import {Button} from 'reactstrap';

RandomPhoto.propTypes = {
    name:   PropTypes.string,
    imageUrl:   PropTypes.string,
    onImageUrlChange:   PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
    name:'',
    imageUrl:'',
    onImageUrlChange:null,
    onRandomButtonBlur:null,
}

/// Hàm lấy Url hình ảnh ngẫu nhiên.
const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

export default function RandomPhoto(props) {
    const {name,imageUrl,onImageUrlChange,onRandomButtonBlur} = props;

    const handleRandomPhotoClick = async() => {
        if (onImageUrlChange) {
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >Random a photo</Button>

                <div className="random-photo__photo">
                    {imageUrl && <img src={imageUrl} alt="Oops...not found. Loading..." onError={handleRandomPhotoClick}></img>}
                </div>
            </div>
        </div>
    );
}