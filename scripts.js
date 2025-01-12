// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
  const takeoff = document.getElementById("takeoff");
  const land = document.getElementById("landing");
  const abort = document.getElementById("missionAbort");
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  const rocket = document.getElementById("rocket");
  const reset = document.getElementById("reset");

  let xpos = 0;
  let ypos = 250;

  takeoff.addEventListener("click", function() {
    let answer = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (answer === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      if (ypos === 250) {
        ypos += -10;
        rocket.style.top = `${ypos}px`;
        spaceShuttleHeight.innerHTML = "10000"
      }
    }
  });

  land.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "";
    spaceShuttleHeight.innerHTML = 0;
    ypos = 250;
    rocket.style.top = "250px";
  });

  abort.addEventListener("click", function() {
    let answer = window.confirm("Confirm that you want to abort the mission.");
    if (answer === true) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "";
      spaceShuttleHeight.innerHTML = 0;
      ypos = 250;
      rocket.style.top = "250px";
    }
  });

  up.addEventListener("click", function() {
    if (ypos > 0) {
      ypos += -10;
      rocket.style.top = `${ypos}px`;
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
      shuttleBackground.style.backgroundColor = "blue";
      flightStatus.innerHTML = "Shuttle in flight.";
    }
  });
  down.addEventListener("click", function() {
    if (ypos < 250) {
      ypos += 10;
      rocket.style.top = `${ypos}px`;
      spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
      if (Number(spaceShuttleHeight.innerHTML) === 0) {
        shuttleBackground.style.backgroundColor = "";
        flightStatus.innerHTML = "The shuttle has landed.";
      }
    }
  });
  right.addEventListener("click", function() {
    if (xpos > (-(Number(shuttleBackground.offsetWidth) / 2) + 25)) {
      xpos += -10;
      rocket.style.right = `${xpos}px`;
    }
  });
  left.addEventListener("click", function() {
    if (xpos < (Number(shuttleBackground.offsetWidth) / 2) - 25) {
      xpos += 10;
      rocket.style.right = `${xpos}px`;
    }
  });

  reset.addEventListener("click", function() {
    rocket.style ="position: relative; top: 250px;";
    shuttleBackground.style.backgroundColor = "";
    flightStatus.innerHTML = "Space shuttle ready for takeoff";
    spaceShuttleHeight.innerHTML = 0;
    xpos = 0;
    ypos = 250;
  });

  console.log("loaded scripts.js");
}

window.addEventListener("load", init);