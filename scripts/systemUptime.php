<?php
$systemUptime = shell_exec("uptime -p | awk '{print $2,$3,$4,$5,$6,$7}'");
print("$systemUptime");
?>
