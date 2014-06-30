<?php
$systemDiskSpaceFree_home = shell_exec("df -h | grep /home/kyle | awk '{print$4}'");
$systemDiskSpaceTotal_home = shell_exec("df -h | grep /home/kyle | awk '{print$2}'");

$systemDiskSpaceFree_external = shell_exec("df -h | grep /media/external | awk '{print$4}'");
$systemDiskSpaceTotal_external = shell_exec("df -h | grep /media/external | awk '{print$2}'");

print("/home/kyle: " . $systemDiskSpaceFree_home . " of " . $systemDiskSpaceTotal_home . " free<br>");
print("/media/external: " . $systemDiskSpaceFree_external . " of " . $systemDiskSpaceTotal_external . " free");

?>
