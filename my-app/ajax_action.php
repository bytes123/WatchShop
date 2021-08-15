<?php 

require_once __DIR__ . "/database.php";



if(isset($_POST['productId'])) {
    $id = intval($_POST['productId']);

    // GET WATCH BY ID FROM SERVER
    require_once __DIR__ . "/public/function/PHP/getWatchsById.php";

    

    // INSERT CART AFTER GOT WATCH
    require_once __DIR__ . "/public/function/PHP/insertCart.php";


    // RENDER AFTER INSERT WATCH INTO CART
   if($data) {
    require __DIR__ . "/public/function/PHP/outputCart.php";
    
   }



}
if(isset($_POST['cartCode'])) {
    $cartCode = $_POST['cartCode'];

    require_once __DIR__ . "/public/function/PHP/deleteCartByCode.php";
   
       
        

   if($data) {
    require __DIR__ . "/public/function/PHP/outputCart.php";
    
   }
}