function reDelete(type) {
    switch (type) {
        case "xiaomi":
            {
                showXiaomi()
                break
            }
        case "samsung":
            {
                showSamsung()
                break
            }
        case "apple":
            {
                showApple()
                break
            }
        case "headphone":
            {
                headphone()
                break
            }
    }
}

function deleteProduct(i, j, type) {
    switch (type) {
        case "xiaomi":
            {
                if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayXiaomi[i][j].getName() + "?")) {
                    arrayXiaomi[i].splice(j, 1)
                }
                break
            }
        case "samsung":
            {
                if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arraySamsung[i][j].getName() + "?")) {
                    arraySamsung[i].splice(j, 1)
                }
                break
            }
        case "apple":
            {
                if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayApple[i][j].getName() + "?")) {
                    arrayApple[i].splice(j, 1)
                }
                break
            }
        case "headphone":
            {
                if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrayHeadphone[i][j].getName() + "?")) {
                    arrayHeadphone[i].splice(j, 1)
                }
                break
            }
    }
    reDelete(type)
}