import React from 'react';
import PropTypes from 'prop-types';
import '../PhotoCard/PhotoCard.scss';
import {Button} from 'reactstrap';

PhotoCard.propTypes = {
    photo:  PropTypes.object.isRequired,
    onEditClick:    PropTypes.func.isRequired,
    onRemoveClick:  PropTypes.func.isRequired,
}

PhotoCard.defaultProps = {
    photo:  {},
    onEditClick:    null,
    onRemoveClick:  null,
}

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick} = props;

    const handleEditClick = () => {
        onEditClick(photo);
    }

    const handleRemoveClick = () => {
        onRemoveClick(photo);
    }

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title}></img>

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>

                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>Edit</Button>
                    </div>
                    <div>
                        <Button outline size="sm" color="light" onClick={handleRemoveClick}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;