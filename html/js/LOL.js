function buyBnt() {
    alert("杨洋生日快乐");
};

function demo() {
    var icoArr = document.querySelectorAll("#smallimg");
    for (let i = 0; i < icoArr.length; i++) {
        icoArr[i].onclick = function () {
            //获取小图片路径
            var oldPath = icoArr[i].getAttribute("src"); 
            //赋值背景图片路径
            document.getElementById("div2").style.backgroundImage = "url(" + oldPath.replace("small", "big") + ")";
            document.querySelector(".heroName p1").innerText = icoArr[i].getAttribute("heroName");
        };
    };
};

