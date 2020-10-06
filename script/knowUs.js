let tablinks = document.getElementsByClassName("tablinks");

tablinks[0].className = tablinks[0].className.replace(" ", "active");
function openTab(evt, options) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log(tablinks[i].className);

    }
    document.getElementById(options).style.display = "block";
    evt.currentTarget.className += " active";
  }

openTab(event, 'SignUp')
  

// const buttonEvent = document.querySelector('.btn')

// buttonEvent.addEventListener('click', function(){
//   alert('Thanks for submitting your message. Our crew will respond shortly.')
// })

function contact() {
  alert("Thanks for submitting your message. Our crew will respond shortly.");
}