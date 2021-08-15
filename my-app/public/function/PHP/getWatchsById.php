<?php 

     
$statement = $pdo->prepare('SELECT * FROM watchs WHERE ID = :ID');
$statement->bindValue(':ID',$id);
$statement->execute();
$watch = $statement->fetch(PDO::FETCH_ASSOC);


$PRODUCT_CODE = $watch['PRODUCT_CODE'];
$CURRENT_PRICE = $watch['CURRENT_PRICE'];
$IMAGE = $watch['IMAGE'];
$TITLE = $watch['TITLE'];
$WATCH_TYPE = $watch['WATCH_TYPE'];
$DATE = date('Y-m-d H:i:s');


?>