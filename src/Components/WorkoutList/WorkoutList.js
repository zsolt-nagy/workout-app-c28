import React from 'react';
import './WorkoutList.css';

export default function WorkoutList(props) {
    const workoutItems = props.workoutItems;

    const deleteButtonClicked = (itemId) => {
        props.deleteItem(itemId);
    }

    const toggleButtonClicked = (itemId) => {
        props.toggleItem(itemId);
    }

    const moveButtonClicked = (itemId, isUpwards) => {
        props.moveItem(itemId, isUpwards);
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
                <button onClick={() => deleteButtonClicked(item.id)}>
                    Delete
                </button>
                <button onClick={() => toggleButtonClicked(item.id)}>
                    {item.isCompleted ? "Clear" : "Complete"} Todo
                </button>
                <button onClick={() => moveButtonClicked(item.id, true)}>
                    Up
                </button>
                <button onClick={() => moveButtonClicked(item.id, false)}>
                    Down
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
