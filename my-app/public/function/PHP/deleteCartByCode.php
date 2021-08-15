<?php 

     
$statement = $pdo->prepare('DELETE FROM cart WHERE PRODUCT_CODE = :CART_CODE');
$statement->bindValue(':CART_CODE',$cartCode);

$data = $statement->execute();


?>