<?php
echo 'Zastosowanie metody include() <br />';
include 'vars.php';
echo $nr_indeksu . ' ' . $nrGrupy . '<br />';
if (isset($nr_indeksu) and isset($nrGrupy)) :
 echo 'Zastosowanie warunku if <br />';
?>
 <div>Kornel Pietrzyk <?= $nr_indeksu ?> grupa <?= $nrGrupy ?></div><br/>
<?php
else :
 echo 'Zastosowanie warunku else <br />';
 echo 'Variables not found <br />';
endif;

echo 'Zastosowanie pętli while() <br />';
$i = 1;
while ($i <= 10) {
 echo $i++ . '<br/>';
}

echo 'Zastosowanie pętli for() <br />';
for ($i = 1; $i <= 10; $i++) {
 echo $i . '<br/>';
}
echo 'Zastosowanie typu zmiennych $_GET <br />';
echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!<br />';

echo 'Zastosowanie typu zmiennych $_POST <br />';
echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!<br />';

echo 'Zastosowanie typu zmiennych $_SESSION <br />';
session_start();

$_SESSION['test'] = 42;
echo $_SESSION['test'];