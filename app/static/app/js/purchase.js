$(document).ready(function() {
    // Generate QR Code
    var qrCode = new QRCode(document.getElementById("qrCode"), {
        text: "Your Payment QR Code",
        width: 128,
        height: 128
    });

    // Handle Payment Button Click
    $('#paymentButton').click(function() {
        alert('Payment successful! Thank you for your purchase.');
    });
});