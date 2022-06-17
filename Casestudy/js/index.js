// list điện thoại xiaomi
// , "../image/add_cart.png"

new Product("Xiaomi 12 series", "19.990.000", "xiaomi", "../image/Xiaomi-12-series.jpg", "../image/add_cart.png", "Màn hình 6.28' Chip Snapdragon 8 Gen 1 8 nhân", "RAM 8 GB, ROM 256 GB", "Camera sau: Chính 50 MP & Phụ 13 MP, 5 MP")
let xiaomi1 = new Product("Xiaomi 12 series ", "19.990.000", "xiaomi", "../image/Xiaomi-12-series.jpg", "../image/add_cart.png", "Màn hình 6.28' Chip Snapdragon 8 Gen 1 8 nhân", "RAM 8 GB, ROM 256 GB", "Camera sau: Chính 50 MP & Phụ 13 MP, 5 MP")
let xiaomi2 = new Product("Xiaomi 11T Pro 5G", "12.990.000", "xiaomi", "../image/xiaomi11t.jpeg ", "../image/add_cart.png", "Màn hình 6.67' Chip Snapdragon 888", "RAM 8 GB, ROM 256 GB", "Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP")
let xiaomi3 = new Product("Xiaomi 11T", "10.990.000", "xiaomi", "../image/xiaomi-11T.jpg", "../image/add_cart.png", "Màn hình 6.67 Chip MediaTek Dimensity 1200", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP")
let xiaomi4 = new Product("Xiaomi Redmi Note 10 Pro   ", "7.490.000", "xiaomi", "../image/xiaomi-redmi-note-10-pro.jpg", "../image/add_cart.png", "Màn hình 6.67' Chip Snapdragon 732G", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 108 MP & Phụ 8 MP, 5 MP, 2 MP")
let xiaomi5 = new Product("Xiaomi Redmi Note 10S", "5.990.000", "xiaomi", "../image/xiaomi-redmi-10s.jpg", "../image/add_cart.png", "Màn hình 6.43' Chip MediaTek Helio G95", "RAM 6 GB, ROM 128 GB", "Camera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP")
let xiaomi6 = new Product("Xiaomi Redmi 10C", "2.790.000", "xiaomi", "../image/xiaomi-redmi-10c.jpg", "../image/add_cart.png", "Màn hình 6.71' Chip Snapdragon 680 8 nhân", "RAM 4 GB, ROM 64 GB", "Camera sau: Chính 50 MP & Phụ 2 MP")
let arrayXiaomi = [
    [xiaomi1, xiaomi2, xiaomi3],
    [xiaomi4, xiaomi5, xiaomi6]
]
new Product("Samsung Galaxy S22 Ultra 5G", "30.990.000", "samsung", "../image/ultra5G.jpg", "../image/add_cart.png", "Màn hình 6.8' Chip Snapdragon 8 Gen 1 8 nhân", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP")
let samsung1 = new Product("Samsung Galaxy S22\n Ultra 5G", "30.990.000", "samsung", "../image/ultra5G.jpg", "../image/add_cart.png", "Màn hình 6.8' Chip Snapdragon 8 Gen 1 8 nhân", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP")
let samsung2 = new Product("Samsung Galaxy \nZ Fold3 5G", "36.990.000", "samsung", "../image/fold3.jpg", "../image/add_cart.png", "Màn hình Chính 7.6' & Phụ 6.2', Chip Snapdragon 888", "RAM 12 GB, ROM 256 GB", "Camera sau: 3 camera 12 MP, Camera trước: 10 MP & 4 MP")
let samsung3 = new Product("Samsung Galaxy S22 5G", "21.990.000", "samsung", "../image/s22.jpg", "../image/add_cart.png", "Màn hình 6.1' , Chip Snapdragon 8 Gen 1 8 nhân", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 50 MP & Phụ 12 MP, 10 MP")
let samsung4 = new Product("Samsung Galaxy Z Flip3 5G", "21.990.000", "samsung", "../image/z.jpg", "../image/add_cart.png", "Màn hình Chính 6.7', & Phụ 1.9', Chip Snapdragon 888", "RAM 8 GB, ROM 128 GB", "Camera sau: 2 camera 12 MP")
let samsung5 = new Product("Samsung Galaxy M51", "6.290.000", "samsung", "../image/m51.jpg", "../image/add_cart.png", "Màn hình 6.8' Chip Snapdragon 8 Gen 1 8 nhân", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP")
let samsung6 = new Product("Samsung Galaxy Note 20", "23.990.000", "samsung", "../image/note20.jpg", "../image/add_cart.png", "Màn hình Chính 6.7', & Phụ 1.6', Chip Snapdragon 888", "RAM 8 GB, ROM 128 GB", "Camera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP")
let arraySamsung = [
    [samsung1, samsung2, samsung3],
    [samsung4, samsung5, samsung6]
]

function showElement(array) {
    let data = "<table>";
    for (let i = 0; i < array.length; i++) {
        data += "<tr>";
        for (let j = 0; j < array[i].length; j++) {
            data += "<td>"
            data += "<img  alt='Lỗi' class='imagePhone' src=" + array[i][j].image + ">"
            data += "<h2 class='name' >" + array[i][j].name + "</h2>"
            data += "<ul class='infomation' >"
            data += "<li>" + array[i][j].info1 + "</li>"
            data += "<li>" + array[i][j].info2 + "</li>"
            data += "<li>" + array[i][j].info3 + "</li>"
            data += "</ul>"
            data += "<div class='priceCart' >"
            data += "<p>Giá: " + array[i][j].price + "đ</p>"
                // if (!checkAdmin()) {
                //     content += "<button onclick='renderEdit(\"Cập nhật\");editProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Sửa&nbsp;</button>" + "&emsp;"
                //     content += "<button onclick='deleteProduct(" + i + "," + j + ',\"' + array[i][j].getCategory() + '"' + ")'>&nbsp;Xóa&nbsp;</button>"
                // }
            data += "<button><img alt='lỗi' class='cart' src=" + array[i][j].cart + "></button>"
            data += "<button class='btn btn-primary'> liên hệ </button>"
            data += "</div>"
            data += "</td>"

        }
        data += "<tr>"
    }
    data += "</table>"
    document.getElementById("displayElement").innerHTML = data
}

function showXiaomi() {
    showElement(arrayXiaomi)
}

function showSamsung() {
    showElement(arraySamsung)
}