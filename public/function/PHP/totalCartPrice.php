<?php 

$statement = $pdo->prepare('SELECT SUM(CURRENT_PRICE) FROM cart');
$statement->execute();
$totalCartPrice =  $statement->fetchColumn();

?>