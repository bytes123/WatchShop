<div class="content">
            <div class="content_wrapper">

                <div class="content_product-watch container ps-y">
                    <div class="product_watch-heading pr-border">
                        <h1 class="product_watch-header fw-bold watch-title no-text-overflow">ĐỒNG HỒ NAM
                        </h1>
                        <div class="hd-border">

                        </div>
                    </div>
                    <ul class="product_watch-list row gy-5">
                        <?php foreach ($watchs as $i => $watch) { ?>
                        <?php if($watch['WATCH_TYPE'] === 'men') { ?>
                        <li class="product_watch-item pr-bd-hv pr-hv text-center col-3 " product-data-id="<?php echo $watch['ID'] ?>">

                            <?php if($watch['ORIGINAL_PRICE']) { ?>
                            <div class="big-circle">
                                -10%
                            </div>
                            <?php } ?>


                           
                            <a href="/dongho/?add-to-cart=<?php echo $watch['PRODUCT_CODE'] ?>" data-product_id="<?php echo $watch['ID'] ?>"  class="cart-add">
                                <strong class="cart-label">
                                    +
                                </strong>
                            </a>
                         

                            <a href="index.php/dongho/san-pham/<?php echo $watch['PRODUCT_CODE'] ?>" class="border-dashed">

                            </a>

                            <div class="watch_img-wrapper ">
                                <?php if(!$watch['ORIGINAL_PRICE']  && !$watch['CURRENT_PRICE']) {?>
                                <div class="out-of-stock-label">
                                    HẾT HÀNG
                                </div>
                                <?php } ?>
                                <img class="watch_img get-sc" src=<?php echo $watch['IMAGE'] ?> alt="">

                            </div>
                            <div class="watch_information-wrapper get-pd">
                                <span class="product_watch-type o-7 fs-6 text-uppercase">
                                    đồng hồ nam
                                </span>

                                <h2 class="watch_name-header">
                                    <a href=""
                                        class="watch_name-link text-decoration-none fs-4 text-dark text-uppercase hv-yellow">
                                        <?php echo $watch['TITLE'] ?>
                                    </a>
                                </h2>

                                <div class="product_watch-price-wrapper d-flex justify-content-center ">
                                    <?php if($watch['ORIGINAL_PRICE']) { ?>
                                    <span
                                        class="watch_price-sale text-decoration-line-through o-8 fs-4 d-flex align-items-center no-text-overflow">           
                                        <?php echo  number_format($watch['ORIGINAL_PRICE'])?> 
                                    </span>
                                    &nbsp;
                                    <span class="text-decoration-underline fw-bold fs-4 o-8">đ</span>
                                    <?php } ?>
                                    <span class="watch_price-root fw-bold fs-4 px-2">
                                        <?php if($watch['CURRENT_PRICE']) { ?>                          
                                        <span class="product-price">
                                            <?php echo number_format($watch['CURRENT_PRICE'])?>
                                        </span>
                                        <span class="text-decoration-underline fw-bold fs-4 ">đ</span>
                                        <?php } ?>
                                    </span>
                                </div>
                            </div>

                        </li>
                        <?php } ?>
                        <?php } ?>




                    </ul>
                </div>

                <div class="content_product-singlebanner">
                    <div class="product_singlebanner-wrapper">

                    </div>
                </div>

                <div class="content_product-watch container ps-y ">
                    <div class="product_watch-heading pr-border">
                        <h1 class="product_watch-header fw-bold watch-title no-text-overflow">ĐỒNG HỒ NỮ
                        </h1>
                        <div class="hd-border">

                        </div>
                    </div>
                    <ul class="product_watch-list row gy-5 ">
                        <?php foreach ($watchs as $i => $watch) { ?>
                        <?php if($watch['WATCH_TYPE'] === 'women') { ?>
                        <li class="product_watch-item pr-bd-hv pr-hv text-center col-3 " product-data-id="<?php echo $watch['ID'] ?>" >

                            <?php if($watch['ORIGINAL_PRICE']) { ?>
                            <div class="big-circle">
                                -10%
                            </div>
                            <?php } ?>



                            
                            <a  href="/dongho/?add-to-cart=<?php echo $watch['PRODUCT_CODE'] ?>"  data-product_id="<?php echo $watch['ID'] ?>" class="cart-add">
                                <strong class="cart-label">
                                    +
                                </strong>
                            </a>
                           

                            <a href="index.php/dongho/san-pham/<?php echo $watch['PRODUCT_CODE'] ?>" class="border-dashed">

                            </a>

                            <div class="watch_img-wrapper ">
                                <?php if(!$watch['ORIGINAL_PRICE']  && !$watch['CURRENT_PRICE']) {?>
                                <div class="out-of-stock-label">
                                    HẾT HÀNG
                                </div>
                                <?php } ?>
                                <img class="watch_img get-sc" src=<?php echo $watch['IMAGE'] ?> alt="">

                            </div>
                            <div class="watch_information-wrapper get-pd">
                                <span class="product_watch-type o-7 fs-6 text-uppercase">
                                    đồng hồ nữ
                                </span>

                                <h2 class="watch_name-header">
                                    <a href=""
                                        class="watch_name-link text-decoration-none fs-4 text-dark text-uppercase hv-yellow">
                                        <?php echo $watch['TITLE'] ?>
                                    </a>
                                </h2>

                                <div class="product_watch-price-wrapper d-flex justify-content-center">
                                    <?php if($watch['ORIGINAL_PRICE']) { ?>
                                    <span
                                        class="watch_price-sale text-decoration-line-through o-8 fs-4 d-flex align-items-center no-text-overflow">                   
                                        <?php echo  number_format($watch['ORIGINAL_PRICE']) ?>
                                    </span>
                                    &nbsp;
                                    <span class="text-decoration-underline fw-bold">đ</span>
                                    <?php } ?>
                                    <?php if($watch['CURRENT_PRICE']) { ?>
                                    <span class="watch_price-root fw-bold fs-4 px-2">           
                                        <?php echo  number_format($watch['CURRENT_PRICE']) ?>                  
                                    </span>
                                    <span class="text-decoration-underline fw-bold fs-4">đ</span>
                                    <?php } ?>
                                </div>
                            </div>

                        </li>
                        <?php } ?>
                        <?php } ?>




                    </ul>
                </div>

            </div>
        </div>

      