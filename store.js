function openDialog() {
    alert("Enjoy all the benefits of an\nEasy Tech!");
}










const cartWindow

function openWindow() {
    cartWindow = window.open("about:blank", "Shopping Cart", "width=750, height=423");
}









document.getElementByClass("storeCards").addEventListener("click", openWindow);

function openWindow() {
    document.getElementByClass("storeCards").open("about:blank", "Shopping Cart", "width=750, height=423");
}