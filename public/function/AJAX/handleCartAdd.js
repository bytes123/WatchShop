let cartWrapper = document.querySelector('.cart-wrapper');
let productId;
let btnAdd = document.querySelectorAll('.cart-add')
  
    function fetchData(data) {
        cartWrapper.innerHTML = data;
    }    
    btnAdd.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        e.preventDefault();
        productId = btn.getAttribute('product-id');
        $.ajax({
            url: '../ajax_action.php',
            method: 'POST',
            data:{productId: productId}, 
            success: ((data) => {
                fetchData(data);
                })
            });
        })
    })
