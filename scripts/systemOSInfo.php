<?php
$systemOSName = shell_exec("lsb_release -d | gawk '{print$2,$3,$4}'");
$systemOSArchitecture = shell_exec("uname -m");

$systemName = shell_exec('hostname');

print('<p>');
print("$systemOSName - $systemOSArchitecture");

print(" - ");

print("$systemName");

print('</p>');

?>
