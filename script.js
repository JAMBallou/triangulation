function main() {
  window.addEventListener("deviceorientation", onOrientationChange);

  navigator.mediaDevices.getUserMedia({video: {
    facingMode: "environment"
  }})
    .then(function (signal) {
      const video = document.getElementById("video");
      video.srcObject = signal;
      video.play();
    })
    .catch(function (err) {
      alert(err);
    });
}

function onOrientationChange(evt) {
  let angle = evt.beta - 90;
  if (angle < 0) {
    angle = 0;
  }

  const distToObj = document.getElementById("slider").value;
  document.getElementById("label").innerHTML = 
    "Distance to Object: " + distToObj + " meters";
  const height = Math.tan(angle * Math.PI / 180) * distToObj;
  document.getElementById("heightInfo").innerHTML = 
    height.toFixed(1) + " m (" + angle.toFixed(1) + "&deg;)";
  console.log(height);
}