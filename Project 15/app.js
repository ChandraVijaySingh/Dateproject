function showSecondContainer() {
  // Hide the first container
  document.getElementById("container1").style.display = "none";
  // Show the second container
  document.getElementById("container2").style.display = "flex";
}

function nextPage() {
  window.location.href = "yes.html";
}

function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth -
      document.getElementById("noButton").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight -
      document.getElementById("noButton").offsetHeight);
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
}