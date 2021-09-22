const todosContainer = document.querySelector(".todos-container ul");
const formAddTodos = document.querySelector(".form-add-todo");
const inputSearchTodo = document.querySelector(".form-search-todos input");

// const deleteTodoIntoDOM = Array.from(todosContainer.children);
// deleteTodoIntoDOM.forEach((item) => console.log(item));

const insertTodoIntoDOM = (event) => {
    event.preventDefault();
    const inputValue = event.target.add.value.trim();

    if (inputValue.length) {
        todosContainer.innerHTML += `<li>
                        <span>${inputValue}</span>
                        <i class="far fa-trash-alt delete"></i>
                        </li>`;

        formAddTodos.reset();
    }
};

const deleteTodoIntoDOM = (event) => {
    const clickedElement = event.target;

    const hasDeleteClass = Array.from(clickedElement.classList).includes(
        "delete"
    );

    if (hasDeleteClass) {
        clickedElement.parentElement.remove();
    }
};

const teste = (event) => {
    event.preventDefault();
    const inputValue = event.target.value.trim().toLowerCase();

    Array.from(todosContainer.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach((todo) => {
            todo.classList.add("hidden");
            todo.classList.remove("visible");
        });

    Array.from(todosContainer.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
        .forEach((todo) => {
            todo.classList.remove("hidden");
            todo.classList.add("visible");
        });
};

formAddTodos.addEventListener("submit", insertTodoIntoDOM);

todosContainer.addEventListener("click", deleteTodoIntoDOM);

inputSearchTodo.addEventListener("input", teste);
