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
        isCompleted: false,
        id: -2 // these are just test data
      },
      {
        exercise: 'Bench press',
        quantity: '40kg 4 x 12',
        isCompleted: false,
        id: -1 // these are just test data
      }, 
      {
        exercise: 'Leg press',
        quantity: '80kg 4 x 25',
        isCompleted: false,
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
      newItem.isCompleted = false;
      newState.workoutList.push(newItem);
      return newState;
    });
  }

  const deleteItem = (itemId) => {
    setWorkoutItems(oldWorkoutItems => {
      const { workoutList, nextId } = oldWorkoutItems;
      const newWorkoutList = workoutList.filter(item => item.id !== itemId);
      return {
        workoutList: newWorkoutList, 
        nextId
      }
    });
  }

  const toggleItem = (itemId) => {
    setWorkoutItems(oldWorkoutItems => {
      const { workoutList, nextId } = oldWorkoutItems;
      const newWorkoutList = workoutList.map(item => {
        item = {...item}; // clone item (not mandatory)
        if (item.id === itemId) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      return {
        workoutList: newWorkoutList, 
        nextId
      }      
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout app</h1>
      </header>
      <main>
        <WorkoutForm addItem={addItem} />
        <WorkoutList 
          workoutItems={workoutItems.workoutList} 
          deleteItem={deleteItem}
          toggleItem={toggleItem} />
      </main>
    </div>
  );
}
