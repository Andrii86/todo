const todoFormInput = document.getElementById('todo-form-input');
const todoFormBtnSubmit = document.getElementById('todo-form-btn-submit');

const TODO_ITEMS = [
  {title: 'Learn Homework'},
  {title: 'Drink water'},
  {title: 'Do yoga'},
  {title: 'Sleep'},
];

const createTodoItemNode = (item) => {
  const itemNode = document.createElement('div');
  const buttonsNode = document.createElement('div');
  const doneStatusButtoneNode = document.createElement('button');
  const removeButtoneNode = document.createElement('button');

  doneStatusButtoneNode.classList.add('btn', 'todo__list-item-btn');
  doneStatusButtoneNode.textContent = 'Done';

  removeButtoneNode.classList.add('btn', 'btn--secondary', 'todo__list-item-btn');
  removeButtoneNode.textContent = 'Remove';

  buttonsNode.appendChild(doneStatusButtoneNode);
  buttonsNode.appendChild(removeButtoneNode);

  itemNode.innerText = item.title;
  itemNode.classList.add('todo__list-item');
  itemNode.appendChild(buttonsNode)

  return itemNode;
};

const renderTodoList = () => {
  const todoListRootNode = document.getElementById('todo-list');

  todoListRootNode.innerHTML = '';

  TODO_ITEMS.forEach((item) => {
    const itemNode = createTodoItemNode(item);

    todoListRootNode.appendChild(itemNode);
  });
};

renderTodoList();

const handleAddTodoItem = (title) => {

  TODO_ITEMS.unshift({title});

  renderTodoList();
}

todoFormBtnSubmit.addEventListener('click', () => {
  handleAddTodoItem(todoFormInput.value);
})
