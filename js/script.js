//Get the button:

mybutton = document.getElementById("myBtn")


// when the user scrolls down 40px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.documentElement.scrollTop = 0;
}
