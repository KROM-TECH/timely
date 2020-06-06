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

const time = document.getElementById('time')
time.addEventListener('change', function () {
  document.getElementById('ST').innerHTML = time.value
})
const check = document.getElementById('check')
check.addEventListener('change', function () {
  if (check.checked) {
    document.getElementById('per').innerHTML = 'PM'
  } else {
    document.getElementById('per').innerHTML = 'AM'
  }
})
