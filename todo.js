document.addEventListener('DOMContentLoaded', function () {
  const addTaskBtn = document.getElementById('add-task');
  const newTaskInput = document.getElementById('new-task');
  const tasksList = document.getElementById('tasks');

  // Function to add a new task
  function addTask() {
      const taskText = newTaskInput.value.trim();
      if (taskText === '') {
          alert('Please enter a task!');
          return;
      }

      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      // Create action buttons (Edit and Delete)
      const actionsDiv = document.createElement('div');
      actionsDiv.classList.add('actions');

      const editBtn = document.createElement('button');
      editBtn.classList.add('edit');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editTask(taskItem));

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteTask(taskItem));

      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(deleteBtn);
      taskItem.appendChild(actionsDiv);

      tasksList.appendChild(taskItem);
      newTaskInput.value = '';
  }

  // Function to edit a task
  function editTask(taskItem) {
      const newTaskText = prompt('Edit your task:', taskItem.firstChild.textContent);
      if (newTaskText !== null) {
          taskItem.firstChild.textContent = newTaskText;
      }
  }

  // Function to delete a task
  function deleteTask(taskItem) {
      taskItem.remove();
  }

  // Event listener for adding task
  addTaskBtn.addEventListener('click', addTask);

  // Add task when 'Enter' is pressed
  newTaskInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });
});
