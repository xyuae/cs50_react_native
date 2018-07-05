const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function increment(str){return parseInt(str) + 1};

function decrement(str){return parseInt(str) - 1};

function newTodo() {
  const count = parseInt(itemCountSpan.textContent)
  const unchecked_count = parseInt(uncheckedCountSpan.textContent)
  const div = document.createElement("div");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteButton = document.createElement("button");
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = "Delete!";
  deleteButton.onclick = function() {
  	div.remove();
  	if (!checkbox.checked){
  		uncheckedCountSpan.textContent = decrement(uncheckedCountSpan.textContent);
  	}
  	itemCountSpan.textContent = decrement(itemCountSpan.textContent);
  } 
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.onclick = function() {
  	if (this.checked) {
  		uncheckedCountSpan.textContent = decrement(uncheckedCountSpan.textContent);
  	}
  	else {
  		uncheckedCountSpan.textContent = increment(uncheckedCountSpan.textContent);
  	}
  }
  li.className = classNames.TODO_ITEM;
  li.textContent = 'To Do Item: ' + count;
  li.appendChild(checkbox);
  li.appendChild(deleteButton);
  div.appendChild(li);
  list.appendChild(div);
  // increment the todo count
  itemCountSpan.textContent = count + 1;
  uncheckedCountSpan.textContent = unchecked_count + 1;
}
