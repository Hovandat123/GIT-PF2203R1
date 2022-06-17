let index = 1;

imageChange = function() {
    let imgs = ["../image/giamgia1.png", "../image/giamgia2.jpg", "../image/giamgia3.png"]
    document.getElementById('img').src = imgs[index];
    index++;
    if (index == 3) {
        index = 0;
    }
    setInterval(imageChange, 2000);
}