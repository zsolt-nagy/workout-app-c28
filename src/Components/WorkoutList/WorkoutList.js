import React from 'react';

export default function WorkoutList(props) {
    const workoutItems = props.workoutItems;
    const tableRows = workoutItems.map(item => (
        <tr key={item.id}>
            <td>{item.exercise}</td>
            <td>{item.quantity}</td>
            <td><button>Delete</button></td>
        </tr>
    ));
    return (
        <table>
            <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}               
            </tbody>
        </table>
    );
}
