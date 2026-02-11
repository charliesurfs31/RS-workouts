/*
function Workouts(discipline, equipment, level) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.discipline = discipline;
  this.equipment = equipment;
  this.level = level;
  this.info = function() {
    console.log(`Discipline: ${this.discipline} | Equipment: ${this.equipment} | Level: ${this.level}`);
  }
}

const Charlie = new Workouts('MTB', 'Minimalist', 'Intermediate');

console.log(Charlie.info());
*/


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
for (let i = 0; i < myWorkout.length; i++) {
    const newExercise = document.createElement('div');
    // appendChild to HTML container like div id="Workout Display" or something
}
}