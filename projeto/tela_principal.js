document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const timeInput = document.getElementById('time-input');

    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        const time = timeInput.value.trim();

        if (task && time) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task}</td>
                <td>${time}</td>
                <td><button class="remove-task">Excluir</button></td>
            `;
            taskList.appendChild(row);

            // Clear inputs after adding the task
            taskInput.value = '';
            timeInput.value = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Delegar evento para remover tarefas
    taskList.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('remove-task')) {
            event.target.closest('tr').remove();
        }
    });
});