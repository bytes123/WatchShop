<?php 

    $statement = $pdo->prepare('SELECT * FROM watchs ORDER BY CREATE_DATE ASC');
    $statement->execute();
    $watchs = $statement->fetchAll(PDO::FETCH_ASSOC);

