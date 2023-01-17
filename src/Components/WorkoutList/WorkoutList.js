import React from 'react';
import './WorkoutList.css';

import { Button, Table } from 'react-bootstrap';

// Font Awesome icons are based on https://fontawesome.com/v5/docs/web/use-with/react
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCircle, 
    faCheck, 
    faArrowUp, 
    faArrowDown, 
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCircle, faCheck, faArrowUp, faArrowDown, faTrashAlt);

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
                    {
                        item.isCompleted ? 
                        <FontAwesomeIcon icon="check" /> : 
                        <FontAwesomeIcon icon="circle" />
                    }
                </Button>
                <Button 
                    onClick={() => moveButtonClicked(item.id, true)}
                    variant="primary"
                    className="m-1">
                    <FontAwesomeIcon icon="arrow-up" />
                </Button>
                <Button 
                    onClick={() => moveButtonClicked(item.id, false)}
                    variant="primary"
                    className="m-1">
                    <FontAwesomeIcon icon="arrow-down" />
                </Button>
                <Button 
                    onClick={() => deleteButtonClicked(item.id)}
                    variant="danger"
                    className="m-1">
                    <FontAwesomeIcon icon="trash-alt" />
                </Button>                
            </td>
        </tr>
    ));

    const listRows = workoutItems.map(item => (
        <li key={item.id} className="workout-list-item">
            <Button 
                onClick={() => toggleButtonClicked(item.id)}
                variant="success"
                className="m-1">
                    {
                        item.isCompleted ? 
                        <FontAwesomeIcon icon="check" /> : 
                        <FontAwesomeIcon icon="circle" />
                    }
            </Button>            
            <span className={"exercise-span " + (item.isCompleted ? "completed" : "")}>
                {item.exercise} ({item.quantity}) 
            </span>
            <span className="button-toolbar">
                <Button 
                    onClick={() => moveButtonClicked(item.id, true)}
                    variant="primary"
                    className="m-1">
                    <FontAwesomeIcon icon="arrow-up" />
                </Button>
                <Button 
                    onClick={() => moveButtonClicked(item.id, false)}
                    variant="primary"
                    className="m-1">
                    <FontAwesomeIcon icon="arrow-down" />
                </Button>
                <Button 
                    onClick={() => deleteButtonClicked(item.id)}
                    variant="danger"
                    className="m-1">
                    <FontAwesomeIcon icon="trash-alt" />
                </Button>
            </span>
                
        </li>
    ));    

    return (
        <>
            <Table striped bordered hover variant="dark" className="table-layout">
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
            <ul className="ul-layout">
                {listRows}
            </ul>     
        </>

    );
}
