var cartWrapper = document.querySelector('.cart-wrapper');







    function fetchData(data) {
        cartWrapper.innerHTML = data;
    }    
    
    $(document).on('click','.cart-add',function(e) {
        e.preventDefault();
        var productId = $(this).data('product_id')        
        $.ajax({
            url: '../ajax_action.php',
            method: 'POST',
            data:{productId: productId}, 
            success: ((data) => {
                fetchData(data);
            })
        });
    })



    
 
                                                                                                                
            $(document).on('click','.cart-delete',function() {
  
                var cartCode = $(this).data('cart_id')
                console.log(cartCode);
                $.ajax({
                    url: '../ajax_action.php',
                    method: 'POST',
                    data:{cartCode: cartCode}, 
                    success: ((data) => {
                  
                        fetchData(data);
                    })
                });
            })
    
       
        