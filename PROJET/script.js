const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

var MainImg = document.getElementById("mainImg");
var smallimg = document.getElementsByClassName("small-img");
smallimg[0].onclick = function () {
  mainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  mainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  mainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  mainImg.src = smallimg[3].src;
};

var productprice = document.querySelector("#price").innerHTML;
var productname = document.querySelector("#product-name").innerHTML;
var productquantity = document.querySelector("#quantity");
var image = MainImg.src;
console.log(productprice);
console.log(productname);
console.log(productquantity);
console.log(image);

var addtocard = document.querySelector(".normal");
addtocard.addEventListener("click", function () {
  localStorage.setItem(
    "product",
    JSON.stringify({
      img: image,
      price: productprice,
      name: productname,
      quantity: productquantity.value,
    })
  );
});
