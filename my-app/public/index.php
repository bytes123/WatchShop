<?php
require_once __DIR__ . "/../database.php";

require __DIR__ . "/./function/PHP/getWatchs.php";

require __DIR__ . "/./function/PHP/getCart.php";

require __DIR__ . "/./function/PHP/countCartAmountProduct.php";

require __DIR__ . "/./function/PHP/totalCartPrice.php";





?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel="stylesheet" href="./assets/font/fone-awesome/css/all.css">
    <link rel="stylesheet" href="./assets/header.css">
    <link rel="stylesheet" href="./assets/content.css">
    <link rel="stylesheet" href="./assets/base.css">
    <link rel="stylesheet" href="./assets/hover.css">
    <link rel="stylesheet" href="./assets/login-modal.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Document</title>


</head>

<body>
    <div class="login_form-wrapper">
        <div class="inner-modal">

        </div>
        <div class="login-form">

        </div>
    </div>
    <div class="wrapper">
        <?php include_once __DIR__ . "/../views/partial/header.php" ?>
        <?php include_once __DIR__ . "/../views/partial/content.php" ?>
        <?php include_once __DIR__ . "/../views/partial/footer.php" ?>
    </div>
   
</body>
<script src="function/AJAX/handleCart.js"></script>
<script src="function/JS/handleHeaderScroll.js"> </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
</html>