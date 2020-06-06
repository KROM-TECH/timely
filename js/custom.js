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
