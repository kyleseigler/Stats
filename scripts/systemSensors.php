<?php
$sensorsCore0 = shell_exec("sensors | egrep 'Core 0' | awk '{print $3}'");
print("Core 0: $sensorsCore0");

$sensorsCore1 = shell_exec("sensors | egrep 'Core 1' | awk '{print $3}'");
print("Core 1: $sensorsCore1");

$sensorsFan = shell_exec("sensors | egrep 'Master' | awk '{print $3}'");
print("Fan speed: $sensorsFan RPM");
?>
