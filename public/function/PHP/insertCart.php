<?php 

$statement = $pdo->prepare("INSERT INTO cart(PRODUCT_CODE,ADD_DATE,CURRENT_PRICE,IMAGE,TITLE,WATCH_TYPE) 
VALUES(:PRODUCT_CODE,:ADD_DATE,:CURRENT_PRICE,:IMAGE,:TITLE,:WATCH_TYPE)");
$statement->bindValue(':PRODUCT_CODE',$PRODUCT_CODE);
$statement->bindValue(':ADD_DATE',$DATE);
$statement->bindValue(':CURRENT_PRICE',$CURRENT_PRICE);
$statement->bindValue(':IMAGE',$IMAGE);
$statement->bindValue(':TITLE',$TITLE);
$statement->bindValue(':WATCH_TYPE',$WATCH_TYPE);
$data = $statement->execute();

?>