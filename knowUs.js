
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
  
  