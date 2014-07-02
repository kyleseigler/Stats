<?php
$systemName = shell_exec('hostname');

print('<span id="systemName">');
print("$systemName");
print('</span>');

?>
