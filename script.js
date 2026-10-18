const input = document.getElementById('task-input');
const btnAdd = document.getElementById('btnAdd');
const list = document.getElementById('task-list');

btnAdd.addEventListener('click', function() {
    addTask();
});

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});


function addTask() {
    let tarefa = input.value.trim();

    if(tarefa=== ""){
        console.log("Escreve uma tarefa!");
    } else {
        let li = document.createElement('li');
        li.textContent = tarefa;
        list.appendChild(li);
        input.value = "";
    }
}