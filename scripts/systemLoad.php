<?php
$systemLoad = shell_exec("uptime | awk '{print $10,$11,$12}'");
print($systemLoad);
?>
