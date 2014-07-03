<?php
$sensorsCore0C = shell_exec("sensors | egrep 'Core 0' | awk '{print $3}'");
$sensorsCore0F = shell_exec("sensors | egrep 'Core 0' | awk '{print ($3*9/5+32)}'");

$sensorsCore1C = shell_exec("sensors | egrep 'Core 1' | awk '{print $3}'");
$sensorsCore1F = shell_exec("sensors | egrep 'Core 1' | awk '{print ($3*9/5+32)}'");

$sensorsFan = shell_exec("sensors | egrep 'Master' | awk '{print $3}'");

print("<p>");
print("CPU Core 0: $sensorsCore0C&deg;C ($sensorsCore0F&deg;F)<br>");
print("CPU Core 1: $sensorsCore1C&deg;C ($sensorsCore1F&deg;F)<br>");
print("Fan speed: $sensorsFan RPM");
print("</p>");

?>
