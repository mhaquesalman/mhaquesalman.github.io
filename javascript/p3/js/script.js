let mainCart = document.getElementById("mainCart");
let cart = document.getElementById("cart");
let cartQty;
let ui = new Ui();
let cartList = []

function showProducts() {
    let products = ui.productList['products'];
    cartList = []

    products.forEach(product => {
        addProductIntoList(product, 'Add to cart')
    })
}

showProducts()

mainCart.addEventListener('click', addCart);
cart.addEventListener('click', addCart);

function addCart(e) {
    let target = e.target;
    if (target.hasAttribute("href")) {
        // target.parentElement.remove();
        let productId = target.previousElementSibling.textContent.trim();
        // console.log(productId);
        if (target.textContent === 'Add to cart') {
            ui.productList['products'].forEach(product => {
                if (product.id == productId) {
                    if (!cartList.includes(product)) {
                        cartList.push(product)
                        addProductIntoList(product, 'Remove from cart');
                        console.log('added')
                        alert('Added to the cart!')
                    } else {
                        console.log('already')
                        alert('Already in the cart')
                    }
                //    cartList.push(product)
                   console.log(cartList)
                //    addProductIntoList(product, 'Remove from cart');
                }
            })
        } else {
            cartList.forEach((product, index) => {
                if (product.id == productId) {
                    target.parentElement.remove();
                    cartList.splice(index, 1);
                    if(cartQty) cartQty.remove()
                    updateCartQty()
                    alert('Remove from the cart')
                }
            })
        }
    }
}

function addProductIntoList(product, text) {
    let col = document.createElement('div')
    col.className = 'col-md-3'
    col.innerHTML = `
    <img width="200" height="200"
         src=${product.url}>
    <h5> ${product.name} </h5>
    <p> ${product.price} </p>
    <p hidden> ${product.id} </p>
    <a href="#" class="cart_btn">${text}</a>`;
    if (text === 'Add to cart') {
        mainCart.appendChild(col)
    }
    else {
        if (cartQty) cartQty.remove();
        cart.appendChild(col)
        updateCartQty()
    }
}

function updateCartQty() {
    if (cartList.length != 0) {
        cartQty = document.createElement('p');
        cartQty.appendChild(document.createTextNode(`${cartList.length} product added`));
        document.querySelector('#cardSec').insertBefore(cartQty, cart);
    }
}

