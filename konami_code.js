const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;
let keyDiv = document.getElementById('keys');

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert("Success!")

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}

init();
