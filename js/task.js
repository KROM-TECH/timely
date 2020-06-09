

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
class task {
  constructor( sub, tim, ) {
    return {sub: sub, tim: tim }
  }
}


// add an event listener to the save button event
document.getElementById('saveTask').addEventListener('click', function () {
  //gets the values
  const taskSub = document.getElementById('days').value
  const taskTime = document.getElementById('TtSubject').value

  if (days == "" || TtSubject == "") { alert('you need to fill in day and subject') }
  else {



    // //push the new object/timetable input to the array
    // timeTable.push(new Tt(id, days, TtSubject, Ttime));
    const NEW = new task(taskSub, taskTime)


    var addToLocalStorageArray = function (value) {
      // Get the existing data
      var existing = localStorage.getItem('timetable');
      // If no existing data, create an array
      // Otherwise, convert the localStorage string to an array
      if (localStorage.getItem('timeTable') == null) {
        existing = []
        // Add new data to localStorage Array
        existing.push(value);
        // Save back to localStorage
        localStorage.setItem('timeTable', JSON.stringify(existing));
      } else {
        existing = JSON.parse(localStorage.getItem('timeTable'));
        // Add new data to localStorage Array
        existing.push(value);
        // Save back to localStorage
        localStorage.setItem('timeTable', JSON.stringify(existing));
      }


    };

    addToLocalStorageArray(NEW)


  }

  location.reload()

})