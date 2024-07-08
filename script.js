//your JS code here. If required.
window.onload = function() {
  function findDomLevel(elementId) {
    let element = document.getElementById(elementId);
    let level = 0;

    // Traverse up the DOM tree until the root html element
    while (element) {
      level++;
      element = element.parentElement;
    }

    return level;
  }

  // Determine the level of the element with ID "level"
  const domLevel = findDomLevel('level');

  // Display the result using alert
  alert(`The level of the element is: ${domLevel}`);
}
