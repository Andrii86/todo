import { store } from './store/store';
import {
  addTodo, removeTodo, setInputValue, updateTodo,
} from './todo/actions';

window.store = store;

const todoFormInput = document.getElementById('todo-form-input');
const todoFormBtnSubmit = document.getElementById('todo-form-btn-submit');

const handleDisabledFormBtnSubmit = (isDisabled) => {
  if (isDisabled) {
    todoFormBtnSubmit.setAttribute('disabled', '');
  } else {
    todoFormBtnSubmit.removeAttribute('disabled');
  }
};

const handleAddTodoItem = (title) => {
  store.dispatch(addTodo({
    id: Math.random(),
    title,
  }));
};

const handleRemoveTodoItem = (id) => {
  store.dispatch(removeTodo(id));
};

const handleUpdateTodoItem = (id, data) => {
  store.dispatch(updateTodo(id, data));
};

const handleChangeInput = () => {
  const { value } = todoFormInput;
  const trimmerValue = value.trim();

  handleDisabledFormBtnSubmit(!trimmerValue.length);

  store.dispatch(setInputValue(trimmerValue));
};

const createTodoItemNode = (item) => {
  const itemNode = document.createElement('div');
  const buttonsNode = document.createElement('div');
  const doneStatusButtonNode = document.createElement('button');
  const removeButtonNode = document.createElement('button');
  const titleNode = document.createElement('span');

  titleNode.textContent = item.title;

  doneStatusButtonNode.classList.add('btn', 'todo__list-item-btn');
  doneStatusButtonNode.textContent = 'Done';
  doneStatusButtonNode.addEventListener('click', () => {
    handleUpdateTodoItem(item.id, {
      isDone: !item.isDone,
    });
  });

  removeButtonNode.classList.add('btn', 'btn--secondary', 'todo__list-item-btn');
  removeButtonNode.textContent = 'Remove';
  removeButtonNode.addEventListener('click', () => {
    handleRemoveTodoItem(item.id);
  });

  buttonsNode.appendChild(doneStatusButtonNode);
  buttonsNode.appendChild(removeButtonNode);

  itemNode.classList.add('todo__list-item');
  itemNode.appendChild(titleNode);
  itemNode.appendChild(buttonsNode);

  if (item.isDone) {
    titleNode.classList.add('todo__list-item-title--done');
    doneStatusButtonNode.textContent = 'Undone';
  }

  return itemNode;
};

const renderTodoList = () => {
  const todoListRootNode = document.getElementById('todo-list');

  todoListRootNode.innerHTML = '';

  const { todoReducer } = store.getState();
  const { inputValue, items } = todoReducer;

  const filteredItems = inputValue
    ? items.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
    : items;

  filteredItems.forEach((item) => {
    const itemNode = createTodoItemNode(item);

    todoListRootNode.appendChild(itemNode);
  });
};

renderTodoList();
handleDisabledFormBtnSubmit(true);

todoFormInput.addEventListener('input', handleChangeInput);

todoFormBtnSubmit.addEventListener('click', () => {
  handleAddTodoItem(todoFormInput.value.trim());

  todoFormInput.value = '';
  handleChangeInput();
});

store.subscribe(renderTodoList);
