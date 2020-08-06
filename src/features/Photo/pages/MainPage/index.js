import React from 'react';
import {Jumbotron, Button} from 'reactstrap';

MainPage.propTypes = {};

export default function MainPage(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Welcome!</h1>
                <p className="lead">This is a Photo management application.</p>
                <hr className="my-2" />
                <p>Have a good day!</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
}