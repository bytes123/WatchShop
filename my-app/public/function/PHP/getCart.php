<?php 
    

    $statement = $pdo->prepare('SELECT w.PRODUCT_CODE,w.IMAGE,w.TITLE,w.CURRENT_PRICE FROM WATCHS as w,CART as c WHERE w.PRODUCT_CODE = c.PRODUCT_CODE GROUP BY c.PRODUCT_CODE ORDER BY c.ADD_DATE ASC ');
    $statement->execute();
    $cart = $statement->fetchAll(PDO::FETCH_ASSOC);
