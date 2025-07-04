
const addButton = document.getElementById('add-button');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');


addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;


  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  
  const editBtn = document.createElement('button');
  editBtn.textContent = '✎';
  editBtn.className = 'edit-btn';
  editBtn.addEventListener('click', () => {
    if (editBtn.textContent === '✎') {

      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.replaceChild(input, span);
      editBtn.textContent = 'Save';
    } else {
  
      const newText = li.querySelector('input').value.trim();
      if (newText !== '') {
        span.textContent = newText;
        li.replaceChild(span, li.querySelector('input'));
        editBtn.textContent = '✎';
      }
    }
  });


  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✗';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

 
  taskList.appendChild(li);
  taskInput.value = ''; 
}
