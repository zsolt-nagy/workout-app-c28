import React from 'react';
import './WorkoutList.css';

export default function WorkoutList(props) {
    const workoutItems = props.workoutItems;

    const deleteButtonClicked = (event) => {
        props.deleteItem(Number(event.target.dataset.id));
    }

    const toggleButtonClicked = (event) => {
        props.toggleItem(Number(event.target.dataset.id));
    }

    const tableRows = workoutItems.map(item => (
        <tr key={item.id}>
            <td className={item.isCompleted ? "completed" : ""}>
                {item.exercise}
            </td>
            <td className={item.isCompleted ? "completed" : ""}>
                {item.quantity}
            </td>
            <td>
                <button onClick={deleteButtonClicked} data-id={item.id}>
                    Delete
                </button>
                <button onClick={toggleButtonClicked} data-id={item.id}>
                    {item.isCompleted ? "Clear" : "Complete"} Todo
                </button>
            </td>
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
