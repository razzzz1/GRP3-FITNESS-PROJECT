import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
        </li>
      ))}
    </ul>
  );
};

export default ExerciseList;
