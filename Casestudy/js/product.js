class Product {
    name
    price
    type
    image
    info1
    info2
    info3
    constructor(name, price, type, image, info1, info2, info3) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.image = image;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
    }
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getImage() {
        return this.image;
    }

    getType() {
        return this.type;
    }
    getInfo1() {
        return this.info1;
    }
    getInfo2() {
        return this.info2;
    }
    getInfo3() {
        return this.info3;
    }
    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setImage(image) {
        this.image = image;
    }

    setType(type) {
        this.type = type;
    }
    setInfo1() {
        return this.info1;
    }
    setInfo2() {
        return this.info2;
    }
    setInfo3() {
        return this.info3;
    }
}