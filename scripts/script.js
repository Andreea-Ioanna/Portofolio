(function(){
    var menu = document.querySelector('ul'),
        menulink = document.querySelector('img');
        
        menulink.addEventListener('click', function(e){
          menu.classList.toggle('active'); 
            e.preventDefault();
        });
})();

function send(){
    alert("Your message is send");
}

function goBack() {
  window.history.back();
}
