import React from 'react';
import './WorkoutList.css';

import { Button, Table } from 'react-bootstrap';

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
                <Button 
                    onClick={() => toggleButtonClicked(item.id)}
                    variant="success"
                    className="m-1">
                    {item.isCompleted ? "Clear" : "Complete"} Todo
                </Button>
                <Button 
                    onClick={() => moveButtonClicked(item.id, true)}
                    variant="primary"
                    className="m-1">
                    Up
                </Button>
                <Button 
                    onClick={() => moveButtonClicked(item.id, false)}
                    variant="primary"
                    className="m-1">
                    Down
                </Button>
                <Button 
                    onClick={() => deleteButtonClicked(item.id)}
                    variant="danger"
                    className="m-1">
                    Delete
                </Button>                
            </td>
        </tr>
    ));
    return (
        <Table striped bordered hover variant="dark">
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
        </Table>
    );
}
