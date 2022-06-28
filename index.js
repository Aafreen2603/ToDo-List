let input = document.querySelector('#newtask input') // stores input entered
let tasksList = document.querySelector('#tasks')
let pushBtn = document.querySelector('#push')  

pushBtn.onclick = function(){
    if(input.value.length == 0){   // if no task is entered
        alert("Please Enter a Task")
    }
    else{  // inner.HTML used since new item is added everytime we add a task
        // add a new task section with task and delete icon
        tasksList.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value} 
                </span>
                <button class="delete"> 
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;  

        // clicking on delete icon:
        let current_tasks = document.querySelectorAll(".delete")

        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){ // The index of element that is to be deleted
                this.parentNode.remove(); // ??
            }
        }

        // if task is clicked on: strickthrough it
        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){ 
            tasks[i].onclick = function(){  // The index of element that is clicked
                this.classList.toggle('completed');
            }
        }

        input.value = "";
    }
}