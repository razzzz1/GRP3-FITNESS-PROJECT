import React, { useState } from 'react';
import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  return (
    <div>
      <h1></h1>
      <ExerciseForm addExercise={addExercise} />
      <ExerciseList exercises={exercises} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
