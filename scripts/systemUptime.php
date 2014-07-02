<?php
$systemUptime = shell_exec("uptime -p | gawk '{print $2,$3,$4,$5,$6,$7,$8,$9}'");

print('<span id="systemUptime">');
print("$systemUptime");
print('</span>');

?>
