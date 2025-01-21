function addTask(){
    // humne memory mein ek list create kri 
      const newTask = document.createElement('li')
    //   tasklist variable mein humne html vale code ke ul ko fetch krlia
      const taskList = document.getElementById('task-list')
    //   ab ul ke andr hmne li ko dynamically append krvalia 
    // or jb hum add task krenge click to li dynamically create hojayega 
      taskList.appendChild(newTask)

      newTask.textContent = document.getElementById('iptask').value

    //   now jo input feild hai vo else,pty bhi honi chaiye 1 task add krne ke baad 
    document.getElementById('iptask').value = ""
    //now we want that ki hr ek list item ke sath delete button bhi create hona chaiye
   deleteTask(newTask)
}

function deleteTask(newTask){
    // creation of button dynamically
    const btn = document.createElement('button')
    btn.textContent = "Delete"
    newTask.appendChild(btn)
    btn.onclick = function(){
        newTask.remove()
    }
}