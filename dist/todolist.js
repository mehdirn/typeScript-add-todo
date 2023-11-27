const todoValue = document.querySelector('.todo-value');
const addTodo = document.querySelector('.add-todo');
const clearTodos = document.querySelector('.clear-todos');
const todoList = document.querySelector('.todoList');
let todos = JSON.parse(localStorage.getItem('todos') || "[]");
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: crypto.randomUUID(),
        title: todoValue.value,
        isComplete: false
    };
    addTodoToDom(newTodo);
    todos.push(newTodo);
    saveTodosInLocalStorage();
    todoValue.value = '';
    todoValue.focus();
};
const addTodoToDom = (todo) => {
    todoList.insertAdjacentHTML('beforeend', `
    <li onClick = "removeTodo('${todo.id}')">
          ${todo.title}<span class="icon"
            ><i class="fas fa-trash"></i
          ></span>
        </li>
  `);
};
const saveTodosInLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return true;
};
const removeTodo = (todoID) => {
    todos = todos.filter(todo => todo.id !== todoID);
    saveTodosInLocalStorage();
    todoList.innerHTML = '';
    todos.forEach((todo) => addTodoToDom(todo));
};
addTodo.addEventListener('click', (e) => handleSubmit(e));
window.addEventListener('DOMContentLoaded', () => {
    todoList.innerHTML = '';
    todos.forEach(todo => addTodoToDom(todo));
});
clearTodos.addEventListener('click', () => {
    todoList.innerHTML = "";
    todos = [];
    saveTodosInLocalStorage();
});
//# sourceMappingURL=todolist.js.map