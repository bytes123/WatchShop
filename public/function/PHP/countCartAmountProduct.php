<?php 
    

    $statementByProductCode = $pdo->prepare('SELECT COUNT(*) FROM cart WHERE PRODUCT_CODE = :PRODUCT_CODE');
    $statementAll = $pdo->prepare('SELECT COUNT(*) FROM cart');
    $statementAll->execute();
    $amoutCartAll =  $statementAll->fetchColumn();