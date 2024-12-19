// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
}
)

// Send Data to WhatsApp
function sendwhatsapp(){
    
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var subject = document.querySelector('#subject').value;
    var message = document.querySelector('#smg').value;

    var url = "https://wa.me/919117395865?text="
    +"*Name :* " +name+"%0a"
    +"*Email :* " +email+"%0a"
    +"*Subject :* " +subject+"%0a"
    +"*Message :* " +message+"%0a"
    
    window.open(url, '_blank').focus();
}
