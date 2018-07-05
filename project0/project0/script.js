const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const count = parseInt(itemCountSpan.textContent)
  const unchecked_count = parseInt(uncheckedCountSpan.textContent)
  const div = document.createElement("div");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  li.className = classNames.TODO_ITEM;
  li.textContent = 'To Do Item: ' + count;
  div.appendChild(checkbox);
  div.appendChild(li);
  list.appendChild(div);
  // increment the todo count
  itemCountSpan.textContent = count + 1;
  uncheckedCountSpan.textContent = unchecked_count + 1;
}
