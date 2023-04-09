function addCus() {
    var cusname = $("#cusname").val();
    var cusemail = $("#cusemail").val();
    var cuspass = $("#cuspass").val();

    $.ajax({
        url: 'customer/customer.php',
        method: 'POST',
        data: {
            cusname : cusname,
            cusemail : cusemail,
            cuspass : cuspass,
        },
        success: function (data) {
            console.log(data)
        }
    })

}
