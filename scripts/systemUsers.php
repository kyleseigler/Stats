<?php
$systemUsers = shell_exec("uptime | gawk '{print $6}'");
print("$systemUsers users");
?>
