<?php

    require_once __DIR__ . "/getCart.php";
    require_once __DIR__ . "/countCartAmountProduct.php"; 
    require __DIR__ . "/totalCartPrice.php";
    $output = ' 
        <a href="" class="category_section-link cart-amount f-same font-white">
            <i class="fas fa-shopping-cart"></i>
            <span class="small-circle">
                '.$amoutCartAll.'
            </span> 
        </a>
        <div class="cart-box mini-box"> 
            <div class="cart-bill '.($cart  ? 'd-block': 'd-none').'">
                <div class="cart-bill-wrapper">';
     foreach ($cart as $i => $bill) {
        
        require_once __DIR__ . "/countCartAmountProduct.php"; 
        $statementByProductCode->bindValue(':PRODUCT_CODE',$bill['PRODUCT_CODE']);
        $statementByProductCode->execute();
        $cartAmountProduct = $statementByProductCode->fetchColumn();

     $output .= '
                <div class="cart-bill-main">
                    <div class="bill-image-wrapper ">
                        <img src="'.$bill['IMAGE'].'" class="cart_product-image" alt="">
                    </div>
                    <div class="cart-bill-infor">
                        <div class="cart-bill-name">
                            <a href="" class="cart-bill-link">
                                '.$bill['TITLE'].'
                            </a>
                        </div>
                        <div class="cart-bill-price-wrapper">
                            <span class="cart-bill-amount">'.$cartAmountProduct.' x</span>
                            <span class="cart-bill-price">
                                '.number_format($bill['CURRENT_PRICE']).'    
                            </span>   
                            <span class="cart-bill-unit">
                                đ
                            </span>
                    </div>     
                </div>
                <div class="cart-close">
                        <i class="far fa-times-circle cart-delete" data-cart_id='.$bill['PRODUCT_CODE'].'></i>
                </div>
                </div>
        ';
    
    
     }
    $output .= '
        
        </div>
        <div class="cart-total">
            <p class="cart-total-price">Tổng cộng: '.number_format($totalCartPrice).'</p>
        </div>
        <div class="cart-btn-box">
        <a href="" class="btn cart-bill-btn">
            XEM GIỎ HÀNG
        </a>  
        <a href=""class="btn cart-pay-btn">
            THANH TOÁN
        </a>  
    </div> 
            </div>
        <div class="cart-empty '.($cart ? 'd-none' : 'd-block').'">
            <p class="cart-empty-label">
                Chưa có sản phẩm trong giỏ hàng.
            </p>
        </div>
        <div class="cart-triangle up-triangle">
        <div class="cart-inner-triangle inner-triangle"></div>
        </div>';
       echo $output;

?>