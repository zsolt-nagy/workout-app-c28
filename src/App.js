import './App.css';

import React from 'react';
import WorkoutList from './Components/WorkoutList/WorkoutList';
import WorkoutForm from './Components/WorkoutForm/WorkoutForm';

export default function App() {

  const [workoutItems, setWorkoutItems] = React.useState({
    workoutList: [
      {
        exercise: 'Push-ups',
        quantity: '4 x 25',
        id: -2 // these are just test data
      },
      {
        exercise: 'Bench press',
        quantity: '40kg 4 x 12',
        id: -1 // these are just test data
      }, 
      {
        exercise: 'Leg press',
        quantity: '80kg 4 x 25',
        id: 0 // these are just test data
      }
    ], 
    nextId: 1
  });

  const addItem = (newItem) => {
    setWorkoutItems(oldState => {
      const newState = {}; 
      newState.nextId = oldState.nextId + 1;
      newState.workoutList = [...oldState.workoutList];
      newItem.id = oldState.nextId;
      newState.workoutList.push(newItem);
      return newState;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout app</h1>
      </header>
      <main>
        <WorkoutForm addItem={addItem} />
        <WorkoutList workoutItems={workoutItems.workoutList} />
      </main>
    </div>
  );
}
