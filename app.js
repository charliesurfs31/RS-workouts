const myWorkout = [];

function Exercise(name, muscle, reps) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
  this.id = crypto.randomUUID();
  this.name = name;
  this.muscle = muscle;
  this.reps = reps;
}

function addExerciseToWorkout(name, muscle, reps) {
    const exercise = new Exercise(name, muscle, reps);
    myWorkout.push(exercise);
}

function displayWorkout() {
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.innerHTML = '';

    for (let i = 0; i < myWorkout.length; i++) {
        const card = document.createElement('div');
        card.classList.add('workout');
        card.textContent = `${myWorkout[i].name} | ${myWorkout[i].muscle} | ${myWorkout[i].reps} reps`;
        exerciseList.appendChild(card);
    }
}

addExerciseToWorkout("Road Strength", "Full Body", 10);
addExerciseToWorkout("Road Power", "Full Body", 8);
addExerciseToWorkout("MTB Strength", "Full Body", 10);
addExerciseToWorkout("MTB Power", "Full Body", 8);
addExerciseToWorkout("Gravel Strength", "Full Body", 10);
addExerciseToWorkout("Gravel Power", "Full Body", 8);
displayWorkout();