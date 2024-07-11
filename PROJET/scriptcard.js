var product=JSON.parse(localStorage.getItem("product"))
console.log(product)
var img=document.querySelector("#prodimg")
var nam=document.querySelector("#prodname")
var price=document.querySelector("#prodprice")
var quantity=document.querySelector("#prodquantity")
var subtotal=document.querySelector("#prodtotal")

var subtot=document.querySelector("#subtot")
var total=document.querySelector("#total")
if (product!==null) {
    img.src=product.img
    nam.innerHTML=product.name
    price.innerText=product.price
    quantity.innerText=product.quantity
    subtotal.innerText=product.price*product.quantity
    subtot.innerHTML=subtotal.innerHTML
    total.innerHTML=Number(subtot.innerHTML)+Number(subtot.innerHTML*0.2)

    
}
var remove=document.querySelector("#remove")
remove.addEventListener("click",function(){
    localStorage.removeItem("product")
    window.location.reload()
})