<?php
$systemUserTotal = shell_exec("uptime | gawk '{print $6}'");
$systemUsersList = shell_exec("users");

$systemUsersPrepped = str_replace(' ', ', ',$systemUsersList);
$systemUsersTrimmed = substr($systemUsersPrepped, 0, -1);

print('<p>');
print("$systemUserTotal logged in:<br>($systemUsersTrimmed)");
print('</p>');

?>
