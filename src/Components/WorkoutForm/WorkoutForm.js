import React from 'react';
import './WorkoutForm.css';

export default function WorkoutForm() {
    const [errorMessage, setErrorMessage] = React.useState('');
    const activityInput = React.useRef();
    const quantityInput = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const activityValue = activityInput.current.value.trim();
        const quantityValue = quantityInput.current.value.trim();

        if (activityValue.length > 0 && quantityValue.length > 0) {
            setErrorMessage('');
            console.log(activityValue, quantityValue);

            activityInput.current.value = '';
            quantityInput.current.value = '';
        } else {
            setErrorMessage('Provide both activity and quantity values.');
        }

    }

    return (
        <form action="#" method="GET" onSubmit={handleSubmit}>
            <div>
                <label>
                    Activity:
                    <input 
                        type="text" 
                        name="activity"
                        ref={activityInput} />    
                </label> 
            </div>
            <div>
                <label>
                    Quantity:
                    <input 
                        type="text" 
                        name="quantity"
                        ref={quantityInput} /> 
                </label>
            </div>
            <button type="submit">Add</button>
            <p className="error-message">{ errorMessage }</p>
        </form>
    );
}