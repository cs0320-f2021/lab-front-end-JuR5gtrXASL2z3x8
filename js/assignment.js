


// ------------- Part 1 -----------------
// Fill out the function addTwoNumbers() to create a working calculator UI (user interface)

function addTwoNumbers () {
    const val1 = document.querySelector('#first-input').value
    const val2 = document.querySelector('#second-input').value

    if (val1 === "" || val2 === "") {
        return;
    }

    // must parse values in order to add them, then convert back to a string
    // in order to input our result into the DOM
    document.querySelector('#total').innerHTML = `${parseInt(val1) + parseInt(val2)}` //backtick method!
}

document.querySelector('#compute-button').addEventListener("click", addTwoNumbers)

//TODO: add an event listener (addTwoNumbers) to the "#plus-button" on "click




// Before starting part 2, your calculator should be able to successfully add two numbers,
// and should not throw an error if either inputs are empty.



// ------------- Part 2 -----------------
// Fill out the following functions to build a shopping cart UI.
// You should be able to logically and visually add items to the cart , and the cart total should
// update upon each addition.


// This will serve as the logical cart: a map from an itemID to its cart-count
const myCart = {}

function setUpShop () {
    const cart_buttons = document.querySelectorAll('.cart-button')
    for (let i = 0; i < cart_buttons.length; i++){
        const btn = cart_buttons[i]
        const item_id = btn.getAttribute("data-for")
        const item = document.querySelector('#' + item_id)
        btn.addEventListener("click", () => addToCart(item))
    }
}

function addToCart (item) {
    const itemID = item.id
    if (itemID in myCart) {
        myCart[itemID] += 1
    } else {
        myCart[itemID] = 1
    }

    displayCart()
}

function displayCart () {
    const cart = document.querySelector('#my-cart')
    //this resets the carts inner HTML
    cart.innerHTML = ""
    let total = 0;

    const displayItem = function (item) {
        const price = item.getAttribute("data-price")
        const quantity = myCart[item.id]

        const paragraph = document.createElement("p");
        const node = document.createTextNode(
            `${item.id + ", quantity: " + quantity + ", $" + parseFloat(price) * parseInt(quantity)}`)
        paragraph.appendChild(node);

        cart.appendChild(paragraph)
        total += parseFloat(price) * parseInt(quantity)
    }

    Object.keys(myCart).map((itemID) => {
        displayItem(document.querySelector('#' + itemID))
    })

    document.querySelector('#cart-total').innerHTML = "$" + `${total}`
}

setUpShop()











