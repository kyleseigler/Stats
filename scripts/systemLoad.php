<?php
$systemLoad = shell_exec("uptime | gawk '{print $10,$11,$12}'");
print($systemLoad);
?>
