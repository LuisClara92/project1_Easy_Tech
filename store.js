function openDialog() {
    alert("Enjoy all the benefits of an\nEasy Tech!");
}





/* ************************************** SHOPPING CART *************************************** */


// const cartWindow

// function openWindow() {
//     cartWindow = window.open("about:blank", "Shopping Cart", "width=750, height=423");
// }



// document.getElementByClass("storeCards").addEventListener("click", openWindow);

// function openWindow() {
//     document.getElementByClass("storeCards").open("about:blank", "Shopping Cart", "width=750, height=423");
// }



// const cartWindow

// function openWindow() {
//     cartWindow = window.open("about:blank", "Shopping Cart", "width=750, height=423");
// }





$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});

$('.like-btn').on('click', function () {
    $(this).toggleClass('is-active');
});