## Stats, for Firefox OS.

Stats is a simple set of files that runs basic GNU/Linux commands, parses the information with PHP into HTML, and refreshes/styles itself with JavaScript and CSS, respectively.

This app displays as a single page in a web browser, with its style optimized for mobile devices.

### What's it for?

I wrote this app so that I could easily monitor my home server, from my mobile or laptop, home or elsewhere. I wanted to make this app simple--and most importantly--useful. At a glance, it is easy to see information such as:
*System name/OS/architecture
*Uptime
*Load averages
*Temperature sensors and fan speed
*Disk usage and free space
*Currently logged-in users

### How do you use it?

Currently, as long as you have a standard LAMP stack (and basic GNU/Linux command line tools such as `gawk`, `grep`, `lm-sensors`, and maybe a few others) everything should work almost out of the box. You do need to modify a few entries in /scripts/systemDiskSpace.php and /scripts/systemSensors.php so that information the proper thermal sensors and disk locations are read and displayed.

### What's the plan for this project?

My upcoming plans include:
*Packaging this to be a hosted webapp for Firefox OS.
*Adding a simple config.txt file to make setting up thermal sensors and disk usage settings easier
*Possibly adding interactive feature, making this app a little more versatile (e.g. manual information refresh or an adjustable interval, expanding/collapsing information fields, HTML5 graphics).

Thank you for reading this far, and I hope you are able to use some of this as well!
