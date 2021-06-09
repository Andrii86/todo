import { store } from './store/store';
import { addTodo, removeTodo } from './todo/actions';

window.store = store;

const todoFormInput = document.getElementById('todo-form-input');
const todoFormBtnSubmit = document.getElementById('todo-form-btn-submit');

const handleAddTodoItem = (title) => {
  store.dispatch(addTodo({
    id: Math.random(),
    title,
  }));
};

const handleRemoveTodoItem = (id) => {
  store.dispatch(removeTodo(id));
};

const createTodoItemNode = (item) => {
  const itemNode = document.createElement('div');
  const buttonsNode = document.createElement('div');
  const doneStatusButtonNode = document.createElement('button');
  const removeButtonNode = document.createElement('button');

  doneStatusButtonNode.classList.add('btn', 'todo__list-item-btn');
  doneStatusButtonNode.textContent = 'Done';

  removeButtonNode.classList.add('btn', 'btn--secondary', 'todo__list-item-btn');
  removeButtonNode.textContent = 'Remove';
  removeButtonNode.addEventListener('click', () => {
    handleRemoveTodoItem(item.id);
  });

  buttonsNode.appendChild(doneStatusButtonNode);
  buttonsNode.appendChild(removeButtonNode);

  itemNode.innerText = item.title;
  itemNode.classList.add('todo__list-item');
  itemNode.appendChild(buttonsNode);

  return itemNode;
};

const renderTodoList = () => {
  const todoListRootNode = document.getElementById('todo-list');

  todoListRootNode.innerHTML = '';

  const state = store.getState();
  const { todoReducer } = state;
  const { items } = todoReducer;

  items.forEach((item) => {
    const itemNode = createTodoItemNode(item);

    todoListRootNode.appendChild(itemNode);
  });
};

renderTodoList();

todoFormBtnSubmit.addEventListener('click', () => {
  handleAddTodoItem(todoFormInput.value.trim());

  todoFormInput.value = '';
});

store.subscribe(renderTodoList);
