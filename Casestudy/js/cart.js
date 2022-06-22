/*Hàm Mở Form*/
function moCart() {
    document.getElementById("myCart").style.display = "block";
}
/*Hàm Đóng Form*/
function dongCart() {
    document.getElementById("myCart").style.display = "none";
}

function moCart() {
    let data = ""
    data += "<table id='table'>" +
        "<tr><td colspan='2'><h2> Giỏ hàng của ban </h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='type'>Loại</label></td>" +
        "</table>"
}