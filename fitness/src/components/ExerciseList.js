import React from 'react';


const ExerciseList = ({ exercises, selectedBodyPart }) => {
  const filteredExercises = exercises.filter((exercise) =>
    !selectedBodyPart || exercise.bodyPart.toLowerCase().includes(selectedBodyPart.toLowerCase())
  );

  
  return (
    <ul>
    {filteredExercises.map((exercise) => (
      <li key={exercise.id}>
        {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
        {selectedBodyPart && exercise.bodyPart.toLowerCase() === selectedBodyPart.toLowerCase() && (
          <img src={exercise.illustrationUrl} alt={exercise.name} width="100px" />
        )}
      </li>
    ))}
  </ul>


  );
};

export default ExerciseList;
