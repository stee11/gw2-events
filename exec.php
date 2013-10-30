<?
	exec("python cgi-bin/getData.py", $o, $p);
	print $o;
	print $p;
?>