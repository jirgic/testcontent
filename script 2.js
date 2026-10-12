const menuData = [
    {id:1, name: "Late", price: 4.50 },
    {id:2, name: "Coffee", price: 3.00 },
    {id:3, name: "Tea", price: 2.50 },
    {id:4, name: "Sandwich", price: 5.00 },
    {id:5, name: "Cake", price: 1.50}
];

let cart = [];
let baseTotal = 0;
let discountActive = false;


function renderMenu(){
    const container = document.getElementById("menu-container");
    let html = ""; 

    menuData.forEach((element, index) => {
        html = html + `<p>${element.name} $${element.price}
            <button class = "button button-${index}">Add</button></p>`;
    });


container.innerHTML = html;

const buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let buttonIndex = btn.className.split("-")[1];
        addToCart(menuData[buttonIndex].id);
    });
});
}

function addToCart(itemId){
    for (let i = 0; i <menuData.length; i++){
        if (menuData[i].id === itemId){
            cart.push(menuData[i]);
            baseTotal = baseTotal + menuData[i].price;
        }
    }
updateCartUI();
}

function checkPromo(){
    const input = document.getElementById("promo-input");
    const message = document.getElementById("promo-message");
    const code = input.value.toUpperCase().trim();

    if (code === "STUDENT20"){
        discountActive = true;
        message.textContent = "20% discount applied!";
        message.classList.remove("error");
        message.classList.add("success");
    } else {
        discountActive = false;
        message.textContent = "Invalid code";
        message.classList.remove("success");
        message.classList.add("error");
    }

    updateCartUI();
}

function updateCartUI(){
    const cartDiv = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total-price");
    let html = "";

    for (let i = 0; i < cart.length; i++){
        html = html + `<p>${cart[i].name} ${cart[i].price}</p>`;
    }

    cartDiv.innerHTML = html;

    if (discountActive){
        totalSpan.textContent = baseTotal * 0.8;
    } else {
        totalSpan.textContent = baseTotal;
    }
}

const button = document.getElementById("apply-promo");
button.addEventListener("click", checkPromo);

renderMenu();

