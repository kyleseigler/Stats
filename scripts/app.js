// Information loaded once/initially
$('#systemOSInfo').load('./scripts/systemOSInfo.php');
$('#systemSensors').load('./scripts/systemSensors.php');
$('#systemUptime').load('./scripts/systemUptime.php');
$('#systemLoad').load('./scripts/systemLoad.php');
$('#systemUsers').load('./scripts/systemUsers.php');
$('#systemDiskUsage').load('./scripts/systemDiskSpace.php');

// Information refreshed every 2 seconds
var auto_refresh2000 = setInterval(
		function() {
      $('#systemSensors').load('./scripts/systemSensors.php');
		}, 2000);

// Information refreshed every 1 minute
var auto_refresh60000 = setInterval(
    function() {
      $('#systemUptime').load('./scripts/systemUptime.php');
      $('#systemLoad').load('./scripts/systemLoad.php');
      $('#systemUsers').load('./scripts/systemUsers.php');
      $('#systemDiskUsage').load('./scripts/systemDiskSpace.php');
    }, 60000);


function toggle(targetDiv) {
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
