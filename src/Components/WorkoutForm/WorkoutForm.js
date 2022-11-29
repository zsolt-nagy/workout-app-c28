import React from 'react';

export default function WorkoutForm() {
    const activityInput = React.useRef();
    const quantityInput = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const activityValue = activityInput.current.value;
        const quantityValue = quantityInput.current.value;

        console.log(activityValue, quantityValue);

        activityInput.current.value = '';
        quantityInput.current.value = '';
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
        </form>
    );
}