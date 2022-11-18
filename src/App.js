import './App.css';

import React from 'react';
import WorkoutList from './Components/WorkoutList/WorkoutList';
import WorkoutForm from './Components/WorkoutForm/WorkoutForm';

export default function App() {

  const [workoutItems, setWorkoutItems] = React.useState([
    {
      exercise: 'Push-ups',
      quantity: '4 x 25',
      id: 1
    },
    {
      exercise: 'Bench press',
      quantity: '40kg 4 x 12',
      id: 2
    }, 
    {
      exercise: 'Leg press',
      quantity: '80kg 4 x 25',
      id: 3
    }
  ]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout app</h1>
      </header>
      <main>
        <WorkoutForm />
        <WorkoutList workoutItems={workoutItems} />
      </main>
    </div>
  );
}
