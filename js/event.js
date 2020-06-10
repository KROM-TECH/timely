const event = JSON.parse(localStorage.getItem('event'))
const eventdeleter = document.getElementById('eventdeleter');
const eventBody = document.getElementById('eventBody');



//Created a class so a new instance object can be call each time the save button is clicked
class evt {
  constructor(sub, tim, ) {
    return { event: sub, Ttime: tim }
  }
}


// add an event listener to the save button event
document.getElementById('saveEvent').addEventListener('click', function () {
  //gets the values
  const eventSub = document.getElementById('eventSubject').value
  const eventTime = document.getElementById('eventDate').value

  if (eventSub == "" || eventTime == "") { document.getElementById('eventWarning').style.display = 'block' }
  else {
    // //push the new object/timetable input to the array
    // timeTable.push(new Tt(id, days, TtSubject, Ttime));
    const NEW = new evt(eventSub, eventTime)


    var addToLocalStorageArray = function (value) {
      // Get the existing data
      var existing = localStorage.getItem('event');
      // If no existing data, create an array
      // Otherwise, convert the localStorage string to an array
      if (localStorage.getItem('event') == null) {
        existing = []
        // Add new data to localStorage Array
        existing.push(value);
        // Save back to localStorage
        localStorage.setItem('event', JSON.stringify(existing));
      } else {
        existing = JSON.parse(localStorage.getItem('event'));
        // Add new data to localStorage Array
        existing.push(value);
        // Save back to localStorage
        localStorage.setItem('event', JSON.stringify(existing));
      }


    };

    addToLocalStorageArray(NEW)

    location.reload()
  }



})
console.log(localStorage.getItem('event'))




//react to the trash bin icon click 
document.getElementById('eventBody').addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {
    console.log(e)

    let delID = e.target.id
    let upNEW = event.splice(delID, 1)

    localStorage.setItem('event', JSON.stringify(event));
    eventBody.innerHTML = ''
    event.forEach(function (doc) {
      eventMain(doc)
    })
  }
})

//rendering to the main page
function eventMain(data) {
  let len = document.getElementsByClassName('ren').length
  const html = `
                    <div class="row" style="margin-bottom:0px !important;">
                      <div class="col">
                        <span><i class="material-icons white-text" id="${len}" style="margin-top: 1.5rem; margin-left: 2rem;">delete</i></span>
                      </div>
                      <div class="col">
                            <p>
                              <label>
                                <span class="white-text lighten-5 eventC1">${data.event}</span>
                                <br>
                                <span style="color:#238a44;">${data.Ttime}</span>
                              </label>
                            </p>
                      </div>
                    </div>         
    `;

  eventBody.innerHTML += html
}

event.forEach(function (doc) {
  eventMain(doc)
})

// reload the page each time the modal closes to update the dom
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('#eventdelete');
  var instances = M.Modal.init(elems, {
    onCloseEnd: function () {
      eventBody.innerHTML = ''
      event.forEach(function (doc) {
        eventMain(doc)
      })
    }
  });
});