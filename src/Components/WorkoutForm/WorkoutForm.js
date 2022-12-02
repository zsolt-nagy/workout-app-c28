import React from 'react';
import { Button, Form } from 'react-bootstrap';

import './WorkoutForm.css';

export default function WorkoutForm(props) {
    const [errorMessage, setErrorMessage] = React.useState('');
    const activityInput = React.useRef();
    const quantityInput = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const activityValue = activityInput.current.value.trim();
        const quantityValue = quantityInput.current.value.trim();

        if (activityValue.length > 0 && quantityValue.length > 0) {
            setErrorMessage('');
            props.addItem({
                exercise: activityValue, 
                quantity: quantityValue
            });

            activityInput.current.value = '';
            quantityInput.current.value = '';
        } else {
            setErrorMessage('Provide both activity and quantity values.');
        }

    }

    return (
        <Form action="#" method="GET" onSubmit={handleSubmit}>
            <Form.Group 
                className="mb-3 col-12 col-sm-6 col-md-4 col-xl-3" 
                controlId="formActivity">
                <Form.Label>Activity</Form.Label>
                <Form.Control 
                    type="text" 
                    name="activity"
                    placeholder="Activity" 
                    ref={activityInput}
                    required />
            </Form.Group>
            <Form.Group 
                className="mb-3 col-12 col-sm-6 col-md-4 col-xl-3" 
                controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control 
                    type="text" 
                    name="quantity"
                    placeholder="Quantity" 
                    ref={quantityInput}
                    required />
            </Form.Group>            
            <Button type="submit" variant="warning">Add</Button>
            <p className="error-message">{ errorMessage }</p>
        </Form>
    );
}