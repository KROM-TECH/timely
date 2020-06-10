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


//react to the trash bin icon click 
document.getElementById('taskBody').addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {

    let delID = e.target.id
    let upNEW = task.splice(delID, 1)

    localStorage.setItem('task', JSON.stringify(task));
    taskBody.innerHTML = ''
    task.forEach(function (doc) {
      taskMain(doc)
    })
  }
})

//rendering to the main page
function taskMain(data) {
  let len = document.getElementsByClassName('rend').length
  const html = `
               <div class="row rend" style="margin-bottom:0px !important;">
                      <div class="col">
                        <span><i class="material-icons white-text" id="${len}" style="margin-top: 1.5rem; margin-left: 2rem;">delete</i></span>
                      </div>
                      <div class="col">
                            <p>
                              <label>
                                <span class="white-text lighten-5 eventC1">${data.task}</span>
                                <br>
                                <span style="color:#d50000;">${data.Ttime}</span>
                              </label>
                            </p>
                      </div>
                    </div>     
    `;

  taskBody.innerHTML += html
}

task.forEach(function (doc) {
  taskMain(doc)
})

