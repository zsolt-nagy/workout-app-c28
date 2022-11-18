import './App.css';
import WorkoutList from './Components/WorkoutList/WorkoutList';
import WorkoutForm from './Components/WorkoutForm/WorkoutForm';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout app</h1>
      </header>
      <main>
        <WorkoutForm />
        <WorkoutList />
      </main>
    </div>
  );
}
