<?php
$systemUptime = shell_exec("uptime -p");
print("$systemUptime");
?>
