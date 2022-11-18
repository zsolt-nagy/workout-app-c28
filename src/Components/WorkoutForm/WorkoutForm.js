import React from 'react';

export default function WorkoutForm() {
    return (
        <form action="#" method="GET">
            <div>
                <label>
                    Activity:
                    <input type="text" name="activity" />    
                </label> 
            </div>
            <div>
                <label>
                    Quantity:
                    <input type="text" name="quantity" /> 
                </label>
            </div>
            <button type="submit">Add</button>
        </form>
    );
}