const task = JSON.parse(localStorage.getItem('task'))
const taskdeleter = document.getElementById('taskdeleter');
const taskBody = document.getElementById('taskBody');

//reacts to the time picker event
document.getElementById('taskTimeFrom').addEventListener('change', function () {
  let value = document.getElementById('taskTimeFrom').value
  document.getElementById('TTF').innerHTML = value
})

document.getElementById('taskTimeTo').addEventListener('change', function () {
  let value = document.getElementById('taskTimeTo').value
  document.getElementById('TTT').innerHTML = value
})


//Created a class so a new instance object can be call each time the save button is clicked
class tas {
  constructor(sub, tim, ) {
    return { task: sub, Ttime: tim }
  }
}


// add an event listener to the save button event
document.getElementById('saveTask').addEventListener('click', function () {
  //gets the values
  const taskSub = document.getElementById('taskSubject').value
  const taskTime = document.getElementById('showTaskTime').innerText

  if (taskSub == "" || taskTime == "") { document.getElementById('taskWarning').style.display = 'block' }
  else {
    // //push the new object/timetable input to the array
    // timeTable.push(new Tt(id, days, TtSubject, Ttime));
    const NEW = new tas(taskSub, taskTime)


    var addToLocalStorageArray = function (value) {
      // Get the existing data
      var existing = localStorage.getItem('task');
      // If no existing data, create an array
      // Otherwise, convert the localStorage string to an array
      if (localStorage.getItem('task') == null) {
        existing = []
        // Add new data to localStorage Array
        existing.push(value);
        // Save back to localStorage
        localStorage.setItem('task', JSON.stringify(existing));
      } else {
        existing = JSON.parse(localStorage.getItem('task'));
        // Add new data to localStorage Array
        existing.push(value);
        // Save back to localStorage
        localStorage.setItem('task', JSON.stringify(existing));
      }


    };

    addToLocalStorageArray(NEW)

    location.reload()
  }



})
console.log(localStorage.getItem('task'))

//loop through the array to output each object to the del modal
task.forEach(function (doc) {
  deltask(doc)
})


function deltask(data) {
  let len = document.getElementsByClassName('rend').length
  const html = `
      <p class="rend" style= "font-size:14px">
          <span style="margin:0.5rem;">${data.task}</span>
          <span style="margin:0.5rem;">${data.Ttime}</span> <br>
          <span class="center" style="margin:0.5rem;"><i class="red-text material-icons" id="${len}">delete</i></span>
      </p>          
    `;
  taskdeleter.innerHTML += html
}

//react to the trash bin icon click 
document.getElementById('taskdeleter').addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {

    let delID = e.target.id
    let upNEW = task.splice(delID, 1)

    localStorage.setItem('task', JSON.stringify(task));
    taskdeleter.innerHTML = ''
    task.forEach(function (doc) {
      deltask(doc)
    })
  }
})

//rendering to the main page
function taskMain(data) {
  const html = `
    <p style="padding-left: 3em;">
          <label>
            <input id="taskCheck1" type="checkbox" />
            <span class="white-text lighten-5 taskC1">${data.task}</span> 
            <br>
             <span class="taskC1" style="margin-left: 3em; color:#d50000;">${data.Ttime}</span>
          </label>
        </p>          
    `;

  taskBody.innerHTML += html
}

task.forEach(function (doc) {
  taskMain(doc)
})

// reload the page each time the modal closes to update the dom
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('#taskdelete');
  var instances = M.Modal.init(elems, {
    onCloseEnd: function () {
      taskBody.innerHTML = ''
      task.forEach(function (doc) {
        taskMain(doc)
      }) } });
});