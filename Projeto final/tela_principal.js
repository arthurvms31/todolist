document.addEventListener('DOMContentLoaded', () => {
    const addGoalButton = document.getElementById('add-goal');
    const exerciseTypeInput = document.getElementById('exercise-type');
    const exerciseDurationInput = document.getElementById('exercise-duration');
    const exerciseFrequencyInput = document.getElementById('exercise-frequency');

    addGoalButton.addEventListener('click', () => {
        const typeValue = exerciseTypeInput.value;
        const durationValue = exerciseDurationInput.value;
        const frequencyValue = exerciseFrequencyInput.value;

        if (typeValue && durationValue && frequencyValue) {
            addGoal(typeValue, durationValue, frequencyValue);
            // Clear inputs
            exerciseTypeInput.value = '';
            exerciseDurationInput.value = '';
            exerciseFrequencyInput.value = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    function addGoal(type, duration, frequency) {
        const goalList = document.querySelector('.goal-list');
        const goalItem = document.createElement('div');
        goalItem.classList.add('goal-item');

        goalItem.innerHTML = `
            <span class="goal-type">${type}</span> - 
            <span class="goal-duration">Duração: ${duration} minutos</span> - 
            <span class="goal-frequency">Frequência: ${frequency} vezes por semana</span>
            <button class="remove-goal">Excluir</button>
        `;

        goalItem.querySelector('.remove-goal').addEventListener('click', () => {
            goalList.removeChild(goalItem);
        });

        goalList.appendChild(goalItem);
    }
});
