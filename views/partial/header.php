<div class="header">
            <div class="header_menu">
                <div class="menu_icon">
                    <div class="menu_icon-wrapper">
                        <a href="index.php" class="menu_icon-link">
                            <img class="menu_icon-img"
                                src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/logo-mona-watches-white.png"
                                alt="">
                        </a>
                    </div>
                </div>
                <div class="menu_category-nav">
                    <ul class="category_nav-list">
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">GIỚI THIỆU</a>
                        </li>
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">ĐỒNG HỒ NAM</a>
                        </li>
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">ĐỒNG HỒ NỮ</a>
                        </li>
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">ĐỒNG HỒ ĐÔI</a>
                        </li>
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">PHỤ KIỆN</a>
                        </li>
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">TIN TỨC</a>
                        </li>
                        <li class="category_nav-item">
                            <a href="" class="catergory_nav-link f-same no-text-overflow">LIÊN HỆ</a>
                        </li>
                    </ul>
                </div>
                <div class="menu_category-section">
                    <ul class="category_section-list">
                        <li class="category_section-item">
                            <a href="" class="category_section-link f-same">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="search-box mini-box">
                            <div class="search-form-wrapper">
                                <div class="search-form">
                                    <input type="text" class="search-form-input">
                                    <a href="" class="icon-wrapper">
                                        <i class="search-form-icon fas fa-search"></i>
                                    </a>
                                    </input>
                                </div>
                                <div class="search-up-triangle up-triangle">
                                    <div class="search-inner-triangle inner-triangle">

                                    </div>
                                </div>
                            </div>

                        </div>
                        </li>
                        <li class="category_section-item login-btn">
                            <script>
                                let loginForm = document.querySelector('.login_form-wrapper');
                                let innerModal = document.querySelector('.inner-modal');
                                document.querySelector(".login-btn").addEventListener('click', (e) => {
                                    loginForm.classList.add('z-full');
                                    document.querySelector('body').style.overflow = 'hidden';
                                })
                                innerModal.addEventListener('click',() => {
                                    loginForm.classList.remove('z-full');
                                    document.querySelector('body').style.overflow = 'auto';
                                })
                            </script>
                            <a  class="category_section-link f-same">
                                <i class="fas fa-user"></i>
                            </a>                    
                        </li>
                                
                        <li class="category_section-item cart-wrapper">
                   
                            <a href="" class="category_section-link cart-amount f-same">
                                <i class="fas fa-shopping-cart"></i>
                                <span class="small-circle">
                                    <?php echo $amoutCartAll ?>
                                </span> 
                            </a>
                            <div class="cart-box mini-box">
                                    <div class="cart-bill <?php if(sizeof($cart) > 0) { ?> d-block <?php } else { ?> d-none <?php } ?>">
                                            <div class="cart-bill-wrapper <?php if(sizeof($cart) > 2) { ?> ov-y <?php } ?>">
                                    <?php foreach ($cart as $i => $bill) { ?>
                                                <?php  require_once __DIR__ . "/../../public/function/PHP/countCartAmountProduct.php"; 
                                                        $statementByProductCode->bindValue(':PRODUCT_CODE',$bill['PRODUCT_CODE']);
                                                        $statementByProductCode->execute();
                                                        $cartAmountProduct = $statementByProductCode->fetchColumn();
                                                ?>
                                                <div class="cart-bill-main">
                                                <div class="bill-image-wrapper ">
                                                    <img src="<?php echo $bill['IMAGE']?>" class="cart_product-image" alt="">
                                                </div>
                                                <div class="cart-bill-infor">
                                                    <div class="cart-bill-name">
                                                        <a href="" class="cart-bill-link">
                                                            <?php echo $bill['TITLE']?>
                                                        </a>
                                                    </div>
                                                    <div class="cart-bill-price-wrapper">
                                                        <span class="cart-bill-amount"><?php echo (int) $cartAmountProduct ?> x</span>
                                                        <span class="cart-bill-price">
                                                            <?php echo number_format($bill['CURRENT_PRICE'])?>
                                                         
                                                        </span>   
                                                        <span class="cart-bill-unit">
                                                            đ
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="cart-close">
                                                    <i class="far fa-times-circle"></i>
                                                </div>
                                                </div>
                                           
                                    <?php }?>                  
                                    </div>     
                                    <div class="cart-total">
                                        <span class="cart-total-price">Tổng cộng: <?php echo number_format($totalCartPrice) ?></span>
                                        <span class="text-decoration-underline fw-bold">đ</span>
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
                                    <div class="cart-empty <?php if(sizeof($cart) > 0) { ?> d-none <?php } else { ?> d-block <?php } ?>">
                                        <p class="cart-empty-label">
                                            Chưa có sản phẩm trong giỏ hàng.
                                        </p>
                                    </div>
                                <div class="cart-triangle up-triangle">
                                    <div class="cart-inner-triangle inner-triangle"></div>
                                </div>

                            </div>

                        </li>
                        

                    </ul>
                </div>
            </div>
            <div id="carouselExampleIndicators" class="header_slider carousel slide" data-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100"
                            src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide1.jpg"
                            alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100"
                            src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide2.jpg"
                            alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100"
                            src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide3.jpg"
                            alt="Third slide">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        