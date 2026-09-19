const input = document.getElementById('task');
const tList = document.getElementById('taskList');
const addBtn= document.getElementById('add')

function addTask(){
    const writtenTask = input.value.trim()
    if(writtenTask ==='') return;
    const taskItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type="checkbox";
    const taskInfo= document.createElement('span');
    taskInfo.textContent = writtenTask;
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = ' x';

    checkbox.addEventListener('change', function(){
        taskItem.classList.toggle('completed', checkbox.checked);

    });
    deleteBtn.addEventListener('click', function(){
        taskItem.remove();
    });
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskInfo);
    taskItem.appendChild(deleteBtn);

    tList.appendChild(taskItem);

    input.value =""
}
addBtn.addEventListener('click', addTask)

input.addEventListener("keypress", function (pressKey){
    if (pressKey.key ==="Enter" || pressKey.key === "Return"){ addTask();}   

});
