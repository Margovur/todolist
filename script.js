document.getElementById('add-button').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✗';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById('task-list').appendChild(li);
  taskInput.value = '';
}