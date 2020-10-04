document.querySelector('#btnPagar').addEventListener("click", (e) => {
    e.preventDefault();

    // obtenemos los campos requeridos
    let productName = document.querySelector('#txtProductName').value;
    let productAmount = document.querySelector('#txtProductAmount').value;
    let productPrice = document.querySelector('#txtProductPrice').value;

   // console.log(`${productName}, ${productAmount}, ${productPrice}`)

     let parametros = {
        "product_name": productName,
        "product_amount": productAmount,
        "product_price": productPrice
    }

    $.ajaxSetup({
        url: './procesar-pago.php',
        beforeSend: function (xhr) {
            //
        }
    });

    $.ajax({
        type: "POST",
        data: parametros,
        dataType: 'json',
        success: function (data) {
            if (data["status"] == 200) {
                console.log(data);
               // location.href = `${data["preferencia"].init_point}`;
            } else {
                alert(data["msg"]);
            }
        },
        error: function (xhr, status) {
            console.log(xhr);
        }
    }); 
})
