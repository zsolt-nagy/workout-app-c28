import './App.css';
import WorkoutList from './Components/WorkoutList/WorkoutList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Workout app</h1>
      </header>
      <main>
        <section>Workout form</section>
        <WorkoutList />
      </main>
    </div>
  );
}

export default App;
