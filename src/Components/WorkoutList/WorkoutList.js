import React from 'react';

export default function WorkoutList() {
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
                <tr>
                    <td>Rowing machine</td>
                    <td>20 minutes</td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Stretching</td>
                    <td>10 minutes</td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>                
            </tbody>
        </table>
    );
}
