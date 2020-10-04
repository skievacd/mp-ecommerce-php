<?php

if(isset($_GET["collection_id"]) && isset($_GET["external_reference"]) && isset($_GET["payment_type"])){
    echo "Transacción exitosa. ID Pago: " . $_GET["collection_id"] . ", Referencia externa: " . $_GET["external_reference"] . ", Tipo de pago: " . $_GET["payment_type"];
} else {
    echo "no venimos desde mercado pago";
}