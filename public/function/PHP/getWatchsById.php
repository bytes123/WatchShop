<?php 

     
$statement = $pdo->prepare('SELECT * FROM watchs WHERE ID = :ID');
$statement->bindValue(':ID',$id);
$statement->execute();
$watch = $statement->fetch(PDO::FETCH_ASSOC);

?>