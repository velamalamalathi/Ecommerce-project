let cart = 0;

function addToCart()
{
    cart++;

    document.getElementById("cart-count").innerHTML = cart;

    alert("Product added successfully!");
}