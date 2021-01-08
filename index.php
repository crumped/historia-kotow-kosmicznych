<?php
include 'showpage.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link type="text/css" rel="stylesheet" href="./assets/css/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Content-Language" content="pl" />
    <meta name="Author" content="Kornel Pietrzyk" />
    <title>Historia lotów kosmicznych</title>
    <script src="assets/js/kolorujtlo.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<?php

error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);

if (file_exists('templates/navbar.html')) {
    require('templates/navbar.html');
}

$page = isset($_GET['page']) ? htmlspecialchars($_GET['page']) : '';

echo PokazStrone($page);

$nr_indeksu = ‘150889’;
$nrGrupy = ‘4’;
echo 'Autor: Kornel Pietrzyk '.$nr_indeksu.' grupa '.$nrGrupy.' wersja 1.5 <br /><br />';
?>
</body>
</html>
