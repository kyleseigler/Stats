var auto_refresh = setInterval(
		function() {
      $('#systemUptime').load('./scripts/systemUptime.php');
      $('#systemLoad').load('./scripts/systemLoad.php');
      $('#systemSensors').load('./scripts/systemSensors.php');
      $('#systemDiskUsage').load('./scripts/systemDiskSpace.php');
      $('#systemUsers').load('./scripts/systemUsers.php');
      $('#systemOSInfo').load('./scripts/systemOSInfo.php');
		}, 2000);

function toggle(targetDiv) {
  //var targetDiv = document.getElementById("systemUptime");
  //var targetDiv = arguments[0];
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}

function toggleOSInfo() {
  var targetDiv = document.getElementById("systemOSInfo");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}

function toggleUptime() {
  var targetDiv = document.getElementById("systemUptime");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}

function toggleLoad() {
  var targetDiv = document.getElementById("systemLoad");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}

function toggleSensors() {
  var targetDiv = document.getElementById("systemSensors");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}

function toggleDiskUsage() {
  var targetDiv = document.getElementById("systemDiskUsage");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}

function toggleUsers() {
  var targetDiv = document.getElementById("systemUsers");
  if (targetDiv.style.display == "none") {
    targetDiv.style.display = "block";
  }
  else {
    targetDiv.style.display = "none";
  }
}
