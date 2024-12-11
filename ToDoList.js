const todoList = [{
    name: `make dinner`,
    dueDate: '2024-10-03'
}, {
    name:`wash dish`,
    dueDate: '2024-10-03'
}];

renderTodoList();

function renderTodoList(){

let todoListHTML = '';

for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
     <div>${dueDate}</div>
    <button onclick="
     todoList.splice(${i}, 1);
     renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
}

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){

    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;


    todoList.push({
      name,
      dueDate
});
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();
}



/*
const nums = [1, 1, 3];
let total = 0;

for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    total += num;
}
console.log(total);

const numsDoubled = [];

for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    numsDoubled.push(num * 2);
}
console.log(numsDoubled);

*/
