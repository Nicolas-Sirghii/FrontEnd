

let todoList =[
{
    name: "wash dishes",
    dueDate: "2022-12-22"
},
{
    name: "learn",
    dueDate: "2022-12-23"
},
{
    name: "watch youtube",
    dueDate: "2022-12-24"
},
];
let todoHTML = '';

function renderTodo(){
    for (let i = 0; i < todoList.length; i++){
      const {name, dueDate} = todoList[i];
      todoHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
      todoList.splice(${i}, 1);
      renderTodo();
      "
      class = "delete-todo-button"
      >Delete</button> `
      };
    document.querySelector('.js-todo-list').innerHTML = todoHTML;
    todoHTML = '';

};

renderTodo();

function addTodo(){

    todoList.push(
         {
            name: document.querySelector('.js-name-input').value,
            dueDate: document.querySelector(".js-due-date-input").value
         }
    );
    document.querySelector('.js-name-input').value.value = '';
    renderTodo();
}
