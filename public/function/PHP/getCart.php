<?php 
    

    $statement = $pdo->prepare('SELECT PRODUCT_CODE,IMAGE,TITLE,CURRENT_PRICE FROM cart GROUP BY PRODUCT_CODE ORDER BY ADD_DATE ASC ');
    $statement->execute();
    $cart = $statement->fetchAll(PDO::FETCH_ASSOC);
