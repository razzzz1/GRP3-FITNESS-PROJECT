import React, { useState } from 'react';
import './ExerciseForm.css';

const ExerciseForm = ({ addExercise }) => {
  const [name, setName] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = {
      id: Math.random(), // Generate a unique id
      name,
      sets,
      reps,
      weight,
    };
    addExercise(newExercise);
    setName('');
    setSets(0);
    setReps(0);
    setWeight(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Exercise Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Sets:</label>
      <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} />
      <label>Reps:</label>
      <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
      <label>Weight (optional):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
