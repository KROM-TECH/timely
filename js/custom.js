const deleter = document.getElementById('deleter');
const Ttable = JSON.parse(localStorage.getItem('timeTable'))
const Tmon = document.getElementById('Tmon')
const Ttue = document.getElementById('Ttue')
const Twed = document.getElementById('Twed')
const Tthu = document.getElementById('Tthu')
const Tfri = document.getElementById('Tfri')
const Tsat = document.getElementById('Tsat')
const Tsun = document.getElementById('Tsun')
    
//make fab disappear when scrolling down
    window.onscroll = function () { myFunction() };
    var prevScrollpos = window.pageYOffset;
    function myFunction() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('fab').style.display = 'block';
      } else {
        document.getElementById('fab').style.display = 'none';
      }
      prevScrollpos = currentScrollPos;
    }

    //listen to slider to adjust time
const ftime = document.getElementById('ftime')
ftime.addEventListener('change', function () {
  document.getElementById('fST').innerHTML = ftime.value
  document.getElementById('ft').innerHTML = ftime.value
})
const fcheck = document.getElementById('fcheck')
fcheck.addEventListener('change', function () {
  if (fcheck.checked) {
    document.getElementById('fper').innerHTML = 'PM'
    document.getElementById('ftt').innerHTML = 'PM'
    document.getElementById('fTtime').style.color = 'orange'
  } else {
    document.getElementById('fper').innerHTML = 'AM'
    document.getElementById('ftt').innerHTML = 'AM'
    document.getElementById('fTtime').style.color = '#151B54'
  }
})

const ttime = document.getElementById('ttime')
ttime.addEventListener('change', function () {
  document.getElementById('tST').innerHTML = ttime.value
  document.getElementById('tt').innerHTML = ttime.value
})
const tcheck = document.getElementById('tcheck')
tcheck.addEventListener('change', function () {
  if (tcheck.checked) {
    document.getElementById('tper').innerHTML = 'PM'
    document.getElementById('ttt').innerHTML = 'PM'
    document.getElementById('tTtime').style.color = 'orange'
  } else {
    document.getElementById('tper').innerHTML = 'AM'
    document.getElementById('ttt').innerHTML = 'AM'
    document.getElementById('tTtime').style.color = '#151B54'
  }
})


 // to check the sub input field and reduce input
    document.getElementById('TtSubject').addEventListener('input', function () {
      let num = document.getElementById('TtSubject').value
      if (num.length > 12) {
        let shorten = num.substring(0, 11);
       document.getElementById('TtSubject').value = shorten
      } else { }
    });

    //Created a class so a new instance object can be call each time the save button is clicked
    class Tt {
      constructor(id, day, sub, tim, ) {
        return { id: id, day: day, sub: sub, tim: tim }
      }
    }


// add an event listener to the save button event
document.getElementById('save').addEventListener('click', function () {
  //gets the values
  const days = document.getElementById('days').value
  const TtSubject = document.getElementById('TtSubject').value
  const Ttime = document.getElementById('sumTime').innerText

  if (days == "" || TtSubject == "") { alert('you need to fill in day and subject') }
  else {

    //check for already existing value
    if (localStorage.getItem('timeTable') == null) {
      console.log('hello')
      var id = 0
    } else {
      console.log('else')
      var id = JSON.parse(localStorage.getItem('timeTable')).length //uses the arrays length as an identifial
      // console.log(new Tt(days,TtSubject, Ttime))
    }


    // //push the new object/timetable input to the array
    // timeTable.push(new Tt(id, days, TtSubject, Ttime));
    const NEW = new Tt(id, days, TtSubject, Ttime)


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

    location.reload()
  }

})

//loop through the array to output each object to the del modal
Ttable.forEach(function (doc) {
  console.log(doc)
  del(doc)
})


function del(data) {
  const html = `
      <p style= "font-size:14px">
          <span style="margin:0.5rem;">${data.day}</span>
          <span style="margin:0.5rem;">${data.sub}</span>
          <span style="margin:0.5rem;">${data.tim}</span> <br>
          <span class="center" style="margin:0.5rem;"><i class="red-text material-icons" id="${data.id}">delete</i></span>
      </p>
          
    `;

  deleter.innerHTML += html
}

console.log(localStorage)
console.log(JSON.parse(localStorage.getItem('timeTable')))


//Display appropiate content for each day
const Monday = Ttable.filter((days) => {
  return days.day == 'mon'
})

const Tuesday = Ttable.filter((days) => {
  return days.day == 'tue'
})

const Wednesday = Ttable.filter((days) => {
  return days.day == 'wed'
})

const Thursday = Ttable.filter((days) => {
  return days.day == 'thu'
})

const Friday = Ttable.filter((days) => {
  return days.day == 'fri'
})

const Saturday = Ttable.filter((days) => {
  return days.day == 'sat'
})

const Sunday = Ttable.filter((days) => {
  return days.day == 'sun'
})
//Display appropiate content for each day end

//Rendering array to DOM
Monday.forEach(function (doc) {
  mon(doc)
})

Tuesday.forEach(function (doc) {
  tue(doc)
})

Wednesday.forEach(function (doc) {
  wed(doc)
})

Thursday.forEach(function (doc) {
  thu(doc)
})

Friday.forEach(function (doc) {
  fri(doc)
})

Saturday.forEach(function (doc) {
  sat(doc)
})

Sunday.forEach(function (doc) {
  sun(doc)
})

//Rendering array to DOM end

//function to render
function mon(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Tmon.innerHTML += html
}

function tue(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Ttue.innerHTML += html
}

function wed(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Twed.innerHTML += html
}

function thu(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Tthu.innerHTML += html
}

function fri(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Tfri.innerHTML += html
}

function sat(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Tsat.innerHTML += html
}

function sun(data) {
  const html = `
    <li>${data.sub} <span class="right">${data.tim}</span></li>          
    `;

  Tsun.innerHTML += html
}

//function to render
