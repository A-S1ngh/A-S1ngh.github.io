document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#obviousalert').addEventListener('click', () => obvious());
});

function obvious() {
  alert("You're literally on it.");
}
