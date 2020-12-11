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

$page = htmlspecialchars($_GET["page"]);
$page_name = null;

$pages = array(
    'crashes'      => 'wypadki',
    'contact'    => 'contact',
    'gallery'    => 'gallery',
    'countdown'    => 'countdown',
    'links'    => 'links',
    'films'    => 'filmy',
    '' => 'glowna',
);
if(isset($pages[$page]))
    $page_name = $pages[$page];
else
    $page_name = 'glowna';

if (file_exists('views/'.$page_name.'.html')) {
    if( $page_name === 'contact')
        echo '<body class="background-pic-contact">';
    else
        echo '<body>';
    require('views/'.$page_name.'.html');
}

$nr_indeksu = ‘150889’;
$nrGrupy = ‘4’;
echo 'Autor: Kornel Pietrzyk '.$nr_indeksu.' grupa '.$nrGrupy.' <br /><br />';
?>
</body>
</html>
