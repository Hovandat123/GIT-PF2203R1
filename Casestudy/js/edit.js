function render(text) {
    let data = ""
    data += "<table id='table'>" +
        "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='type'>Loại</label></td>" +
        "<td><select id='type'>" +
        "<option></option>" +
        "<option value='xiaomi'>Xiaomi</option>" +
        "<option value='samSung'>SamSung</option>" +
        "<option value='apple'>Apple</option>" +
        "<option value='Phụ kiện'>Phụ kiện</option>" +
        "<option value='Máy tính bảng<'>Máy tính bảng</option>" +
        "</select></td></tr>" +
        "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
        "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
        "<tr><td><label for='info1'>Thông tin 1</label></td>" +
        "<td><input type='text' name='info1' size='25' maxlength='30' id='info1'></td></tr>" +
        "<tr><td><label for='info2'>Thông tin 2</label></td>" +
        "<td><input type='text' name='info2' size='25' maxlength='30' id='info2'></td></tr>" +
        "<tr><td><label for='info3'>Thông tin 3</label></td>" +
        "<td><input type='text' name='info3' size='25' maxlength='30' id='info3'></td></tr>" +
        "<tr><td></td><td>" +
        "<button onclick='edit()'>&emsp;" + text + "&emsp;</button> " +
        "<button onclick='cancelEdit()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
        "</table>"
    document.getElementById("Editchange").innerHTML = data
}

function cancelEdit() {
    document.getElementById("Editchange").innerHTML = ''
}
//edit khi click vào submit form
function edit() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let type = document.getElementById("type").value
    let image = document.getElementById("image").value
    let info1 = document.getElementById("info1").value
    let info2 = document.getElementById("info2").value
    let info3 = document.getElementById("info3").value
    let i = localStorage.getItem("indexI")
    let j = localStorage.getItem("indexJ")
    switch (type) {
        case "xiaomi":
            {
                arrayXiaomi[i][j] = new Product(name, price, type, image, info1, info2, info3)
                showXiaomi()
                break
            }
        case "samsung":
            {
                arraySamsung[i][j] = new Product(name, price, type, image, info1, info2, info3)
                break
            }
        case "apple":
            {
                arrayApple[i][j] = new Product(name, price, type, image, info1, info2, info3)
                break
            }
        case "headphone":
            {
                arrayHeadphone[i][j] = new Product(name, price, type, image, info1, info2, info3)
                break
            }
    }
    cancelEdit()
}

//edit khi click vào nút edit
function editProduct(i, j, type) {
    localStorage.setItem("indexI", i)
    localStorage.setItem("indexJ", j)
    switch (type) {
        case "xiaomi":
            {
                renderEdit(arrayXiaomi[i][j])
                break
            }
        case "samsung":
            {
                renderEdit(arraySamsung[i][j])
                break
            }
        case "apple":
            {
                renderEdit(arrayApple[i][j])
                break
            }
        case "headphone":
            {
                renderEdit(arrayHeadphone[i][j])
                break
            }
    }
}

function renderEdit(product) {
    document.getElementById("name").value = product.getName()
    document.getElementById("price").value = product.getPrice()
    document.getElementById("type").value = product.getType()
    document.getElementById("image").value = product.getImage()
    document.getElementById("info1").value = product.getInfo1()
    document.getElementById("info2").value = product.getInfo2()
    document.getElementById("info3").value = product.getInfo3()
}