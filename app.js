const myWorkout = [];

function Exercise(name, muscle, reps) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
  this.id = crypto.randomUUID();
  this.name = name;
  this.muscle = muscle;
  this.reps = reps;
  this.completed = false;
}

Exercise.prototype.toggleCompleted = function() {
    this.completed = !this.completed;
};

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

        const toggleButton = document.createElement('button');
        toggleButton.dataset.id = myWorkout[i].id;
        card.appendChild(toggleButton).addEventListener('click', function() {
            const exercise = myWorkout.find(function(ex) {
                return ex.id === toggleButton.dataset.id;
            });
            exercise.toggleCompleted();
            displayWorkout();
        })
        toggleButton.textContent = myWorkout[i].completed ? 'Workout Completed' : 'Complete Workout';
        card.style.backgroundColor = myWorkout[i].completed ? 'green' : 'lightgray';

        const removeButton = document.createElement('button');
        removeButton.dataset.id = myWorkout[i].id;
        removeButton.textContent = 'Remove';
        card.appendChild(removeButton).addEventListener('click', function() {
            const index = myWorkout.findIndex(function(ex) {
                return ex.id === removeButton.dataset.id;
            });
            myWorkout.splice(index, 1);
            displayWorkout();
        });
}}

document.getElementById('add-exercise-btn').addEventListener('click', function() {
    document.getElementById('add-exercise-dialog').showModal();
})

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('add-exercise-dialog').close();
})

document.getElementById('add-exercise-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('exercise-name').value;
    const muscle = document.getElementById('exercise-muscle').value;
    const reps = parseInt(document.getElementById('exercise-reps').value);
    addExerciseToWorkout(name, muscle, reps);
    document.getElementById('add-exercise-dialog').close();
    displayWorkout();
    document.getElementById('add-exercise-form').reset();
})

addExerciseToWorkout("Road Strength", "Full Body", 10);
addExerciseToWorkout("Road Power", "Full Body", 8);
addExerciseToWorkout("MTB Strength", "Full Body", 10);
addExerciseToWorkout("MTB Power", "Full Body", 8);
addExerciseToWorkout("Gravel Strength", "Full Body", 10);
addExerciseToWorkout("Gravel Power", "Full Body", 8);
displayWorkout();

