var hv = document.querySelector('.hv');
var hidden = document.querySelector('.hover-menu');
var sl = document.querySelector('sm');
var news = document.querySelectorAll('.imgnew');
var prodImg = document.querySelectorAll(".imgProd")


// news 
for (var i = 0; i < news.length; i++) {
  var el = news[i];
  news[i].onmouseenter = function(evt){
  	evt.target.classList.remove('trans')
      evt.target.classList.add('saleb');
  };
   news[i].onmouseleave = function(evt){
  evt.target.classList.remove("saleb");
  evt.target.classList.add('trans')
}
};


// sale product
for (var i = 0; i < prodImg.length; i++) {
  var elementss = prodImg[i];
  prodImg[i].onmouseenter = function(evt){
      evt.target.classList.remove('trans')
      evt.target.classList.add('saleb');
  };
  

  prodImg[i].onmouseleave = function(evt){
 evt.target.classList.add('trans')
      evt.target.classList.remove('saleb');
}
};

// hover menu script
hv.addEventListener('mouseenter', function(){
	hidden.style.display = "block";
});
hidden.addEventListener('mouseleave', function(){
	hidden.style.display = "none";
});


//scroll button
var up = document.querySelector('.up-btn');
up.addEventListener('click', function(){
  window.scrollTo(2300, 0);
})

