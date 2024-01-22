const todo_list = [];

function add_todo (){
   const inputa_todo =  document.querySelector('.todo-input')
    const name = inputa_todo.value;
    console.log(name);
    todo_list.push(name);
    console.log(todo_list);

    
     let todoHTML ='';
    for (let i = 0; i< todo_list.length; i++)
    {
        const todoo = todo_list[i];
        const html = `<p>
        ${todoo}
        <button onclick="
          todo_list.splice(${i},1);
        ">Delete</button>
        </p>`;
        todoHTML += html;
    }

    inputa_todo.value='';
    console.log(todoHTML);
    document.querySelector('.todo-div')
    .innerHTML = todoHTML;
}


