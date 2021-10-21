var todobtn = document.getElementById('button');
var todoinput = document.getElementById('input');
var todolist = document.getElementById('todo-list');
todobtn.addEventListener('click', addTodo);
todolist.addEventListener('click',delettodo);


function addTodo(e) {
    var arr = []; 
    e.preventDefault()
    var input = todoinput.value;
    
    let local=localStorage.getItem('local');
    if(local==null){
     arr=['jgvjgv','segsg',];
    }
    else{
        arr=JSON.parse(local);       
    }
    arr.push(input);
    localStorage.setItem("local",JSON.stringify(arr));
    if (input == "") {
        alert('enter word')
    }
    else {
       
        for(let i=0;i<arr.length;i++){     
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        var newTodo = document.createElement('li');
        newTodo.innerText = arr[i];
        newTodo.classList.add('todo-items')
        todoDiv.appendChild(newTodo);
        var editButton = document.createElement('button');
        editButton.innerHTML = "e";
        editButton.classList.add('edit');
        todoDiv.appendChild(editButton);
        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = "delet";
        deleteButton.classList.add('delete');
        todoDiv.appendChild(deleteButton);
        todolist.appendChild(todoDiv)
        todoinput.value=''
        }
    }
   
}
function delettodo(e) {
    debugger;
    var item = e.target
    if (item.classList[0] === 'delete') {
        const todo = item.parentElement;
        todo.remove()
    }
}
